import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { Separator } from "./ui/separator";
import { useState, type Dispatch, type SetStateAction } from "react";
import { CopyIcon, TrashIcon, CaretSortIcon } from "@radix-ui/react-icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

export const formSchema = z.object({
  name: z.string().min(2).max(10).toLowerCase().default("example"),
  content: z.string().max(255).optional().default(""),
  attachments: z
    .object({ name: z.string().min(1) })
    .array()
    .or(z.string().array())
    .optional(),
});

export type formValues = z.infer<typeof formSchema>;

export function MessageForm({
  setData,
}: {
  setData: Dispatch<SetStateAction<formValues>>;
}) {
  const form = useForm<formValues>({
    resolver: zodResolver(formSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "attachments",
  });

  const [rows, setRows] = useState([] as ("button" | "select")[]);

  const { toast } = useToast();

  function convertAttachments(
    attachments:
      | {
          name: string;
        }[]
      | string[]
      | undefined,
  ): string[] {
    attachments = (attachments as { name: string }[]).map((item) => item.name);
    return attachments;
  }

  async function onChange(values: formValues) {
    const data = values;
    if (data.attachments) {
      data.attachments = convertAttachments(data.attachments);
    }

    setData(data);
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = values;
    if (data.attachments) {
      data.attachments = convertAttachments(data.attachments);
    }
    await navigator.clipboard.writeText(JSON.stringify(data));

    toast({
      title: "Code copied!",
    });
  }

  return (
    <Form {...form}>
      <form
        onChange={form.handleSubmit(onChange)}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message Name</FormLabel>
              <FormControl>
                <Input placeholder="example" {...field} />
              </FormControl>
              <FormDescription>
                This is the identifier that will be used with /sendmsg command
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex space-x-2 space-y-0">
          <Button type="submit">
            <CopyIcon className="mr-2" /> Copy code
          </Button>
        </div>
        <Separator />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message Content</FormLabel>
              <FormControl>
                <Textarea placeholder="Hello, world!" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Collapsible className="space-y-3">
          <CollapsibleTrigger className="flex items-center space-x-1 space-y-0">
            <span className="font-bold">Attachments</span>
            <CaretSortIcon />
          </CollapsibleTrigger>
          <CollapsibleContent>
            {fields.map((field, index) => (
              <div key={field.id}>
                <FormField
                  control={form.control}
                  name={`attachments.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Attachment {index}</FormLabel>
                      <FormControl>
                        <div className="flex space-x-2">
                          <Input placeholder="name" {...field} />
                          <Button
                            type="button"
                            onClick={() => remove(index)}
                            size="icon"
                            variant="destructive"
                          >
                            <TrashIcon />
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
            <Button
              type="button"
              onClick={() => append({ name: "" })}
              variant="outline"
            >
              Add attachment
            </Button>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="space-y-3">
          <CollapsibleTrigger className="flex items-center space-x-1 space-y-0">
            <span className="font-bold">Embeds</span>
            <CaretSortIcon />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Button type="button" variant="outline">
              Add embed
            </Button>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="space-y-3">
          <CollapsibleTrigger className="flex items-center space-x-1 space-y-0">
            <span className="font-bold">Component rows</span>
            <CaretSortIcon />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Button type="button" variant="outline">
              Add row
            </Button>
          </CollapsibleContent>
        </Collapsible>
      </form>
    </Form>
  );
}
