import Embed from "./embed";

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <div className="flex justify-center my-5 p-2 rounded text-4xl font-bold">
        💫 Stella Embed Builder
      </div>
      <input
        type="text"
        placeholder="Message"
        className="my-3 bg-transparent focus-visible:outline-none"
      />
      <div className="embeds">
        <Embed></Embed>
      </div>
    </main>
  );
}
