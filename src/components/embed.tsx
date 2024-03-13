import { useState } from "react";
import { Field } from "./field";
import { UseFormReturn } from "react-hook-form";
import { formValues } from "./messageForm";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { Separator } from "./ui/separator";

export function Embed({
  id,
  form,
}: {
  id: number;
  form: UseFormReturn<formValues, unknown, undefined>;
}) {
  const [fields, setFields] = useState([] as boolean[]);

  function addField() {
    setFields([...fields, false]);
  }

  function resetFields() {
    setFields([]);
  }

  return (
    <div className="space-y-3 px-2">
      <div className="font-bold">Embed {id}</div>
      <FormField
        control={form.control}
        name={`embeds.${id}.title`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Embed title</FormLabel>
            <FormControl>
              <Input placeholder="Some title" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`embeds.${id}.description`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Embed description</FormLabel>
            <FormControl>
              <Textarea placeholder="Some description" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div>
        {fields.map((item, i) => (
          <Field key={i} id={i} />
        ))}
      </div>
      <div className="flex space-x-2 space-y-0">
        <Button variant="outline">Add field</Button>
        <Button variant="destructive">Delete embed</Button>
      </div>
      <Separator />
    </div>
  );
}
