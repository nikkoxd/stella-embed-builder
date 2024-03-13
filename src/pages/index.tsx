import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import {
  MessageForm,
  formSchema,
  type formValues,
} from "~/components/messageForm";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { Toaster } from "~/components/ui/toaster";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  const [data, setData] = useState<formValues>(formSchema.parse({}));

  return (
    <>
      <Head>
        <title>Stella 💫 Embed Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <div className="my-10 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Stella 💫 Embed Builder</h1>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href="https://discord.gg/starrysky"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <DiscordLogoIcon className="mr-2" /> Discord
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="https://github.com/nikkoxd/stella-embed-builder"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <GitHubLogoIcon className="mr-2" /> GitHub
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex gap-10">
          <div className="h-[600px] w-1/2 overflow-x-visible overflow-y-scroll px-1">
            <h1 className="mb-5 text-2xl font-bold">Builder Form</h1>
            <MessageForm setData={setData} />
          </div>
          <div>
            <div>
              <h1 className="mb-5 text-2xl font-bold">Code</h1>
              <pre
                id="output"
                className="h-[350px] w-[650px] overflow-auto rounded bg-neutral-950 p-4"
              >
                <code className="text-sm text-white">
                  {JSON.stringify(data, null, 2)}
                </code>
              </pre>
            </div>
          </div>
        </div>
        <Toaster />
      </main>
    </>
  );
}
