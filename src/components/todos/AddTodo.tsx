import Button from "../button/Button";
import Input from "../input/Input";
import Form from "../form/Form";
import { createTodo } from "@/actions";

const AddTodo = () => {
  return (
    <div>
      <Form action={createTodo}>
        <div className="flex gap-2">
          <Input name="input" type="text" placeholder="Add todos" />
          <Button type="submit" text="Add" bgColor="bg-blue-600" />
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;
