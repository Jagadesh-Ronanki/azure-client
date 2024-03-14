import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "../../../components/ui/button.jsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog.jsx"
import { Input } from "../../../components/ui/input.jsx"
import { Label } from "../../../components/ui/label.jsx"
import { useState } from "react";

function DataTableAdd({ table, onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    price: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to add product');
      }
      const data = await response.json();
      if (data.success) {
        console.log('Product added successfully');
        onAdd(formData); // Assuming this function is updating the UI with the new data
        setFormData({
          name: "",
          price: ""
        });
      } else {
        throw new Error('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error.message);
      // Handle error here
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="mr-2">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add a Product</DialogTitle>
          <DialogDescription>
            Fill all the details. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
              <Label htmlFor="name" className="pb-2 font-bold">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
              <Label htmlFor="price" className="pb-2 font-bold">
                Price
              </Label>
              <Input
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { DataTableAdd };
