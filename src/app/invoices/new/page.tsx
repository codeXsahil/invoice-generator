import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto my-10">
      <div className="flex justify-between">
        <h1 className="text-5xl font-bold mx-5">Invoices</h1>
      </div>
      <div>
        <form className="grid gap-4 max-w-xs">
          <div>
            <Label className="block text-sm font-semibold">Billing Name</Label>
            <Input id="name" name="name" type="text"></Input>
          </div>
          <div>
            <Label className="block text-sm font-semibold">Billing Email</Label>
            <Input id="email" name="email" type="email"></Input>
          </div>
          <div>
            <Label className="block text-sm font-semibold">Value</Label>
            <Input id="value" name="value" type="text"></Input>
          </div>
          <div>
            <Label className="block text-sm font-semibold">Description</Label>
            <Textarea></Textarea>
          </div>
          <div>
            <Button className=" w-full font-semibold">Submit</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
