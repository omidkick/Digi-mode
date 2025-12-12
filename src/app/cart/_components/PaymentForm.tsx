import { PaymentFormInputs, paymentFormSchema } from "@/types";
import ContinueButton from "@/ui/ContinueButton";
import RHFTextField from "@/ui/RHFTextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {
   alert("پرداخت با موفقیت انجام شد!");
    // Handle payment submission here
  };

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      {/* Card Holder Name */}
      <RHFTextField<PaymentFormInputs>
        label="نام صاحب کارت"
        name="cardHolder"
        dir="rtl"
        register={register}
        errors={errors.cardHolder}
        isRequired
        placeholder="نام صاحب کارت را وارد کنید"
      />

      {/* Card Number */}
      <RHFTextField<PaymentFormInputs>
        type="text"
        label="شماره کارت"
        name="cardNumber"
        dir="ltr"
        register={register}
        errors={errors.cardNumber}
        isRequired
        placeholder="1234 5678 9012 3456"
        maxLength={16}
      />

      {/* Expiration Date */}
      <RHFTextField<PaymentFormInputs>
        type="text"
        label="تاریخ انقضاء"
        name="expirationDate"
        dir="ltr"
        register={register}
        errors={errors.expirationDate}
        isRequired
        placeholder="MM/YY"
        maxLength={5}
      />

      {/* CVV */}
      <RHFTextField<PaymentFormInputs>
        type="text"
        label="CVV"
        name="cvv"
        dir="ltr"
        register={register}
        errors={errors.cvv}
        isRequired
        placeholder="123"
        maxLength={3}
      />

      {/* Payment Methods */}
      <div className="flex items-center gap-2 mt-2">
        <Image
          src="/klarna.png"
          alt="klarna"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/cards.png"
          alt="cards"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/stripe.png"
          alt="stripe"
          width={50}
          height={25}
          className="rounded-md"
        />
      </div>

      {/* Submit Button with ContinueButton */}
      <ContinueButton
        type="submit"
        icon={<ShoppingCart className="w-4 h-4" />}
        isLoading={isSubmitting}
      >
        تکمیل سفارش
      </ContinueButton>
    </form>
  );
};

export default PaymentForm;
