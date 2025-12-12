import z from "zod";

// types for Single Product:
export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
  category: string;
  createdAt: string;
};

// types for Multiple Products:
export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

// Shipping Form Validation Schema and Types using Zod:
export const shippingFormSchema = z.object({
  name: z.string().min(1, "وارد کردن نام الزامی است!"),
  email: z
    .string()
    .email("ایمیل معتبر وارد کنید!")
    .min(1, "وارد کردن ایمیل الزامی است!"),
  phone: z.string().regex(/^09\d{9}$/, "شماره موبایل معتبر نیست!"),
  address: z.string().min(1, "وارد کردن آدرس الزامی است!"),
  city: z.string().min(1, "وارد کردن شهر الزامی است!"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "وارد کردن نام صاحب کارت الزامی است!"),
  cardNumber: z
    .string()
    .min(16, "وارد کردن شماره کارت الزامی است!")
    .max(16, "شماره کارت باید 16 رقم باشد!"),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "تاریخ انقضاء باید به فرمت MM/YY باشد!"),
  cvv: z
    .string()
    .min(3, "وارد کردن CVV الزامی است!")
    .max(3, "CVV باید 3 رقم باشد!"),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;
