import { Button } from "@repo/ui/button";
import { Card, CardContent, CardHeader } from "@repo/ui/card";

export default function signup() {
  return (
    <Card className="flex justify-center items-center">
      <CardHeader>Sign Up to Continue</CardHeader>
      <CardContent>
        <form>
          <label>Email</label>
          <input placeholder="Email" type="email" />
        </form>
      </CardContent>
    </Card>
  );
}
