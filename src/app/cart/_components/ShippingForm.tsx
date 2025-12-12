import { ShippingFormInputs, shippingFormSchema } from "@/types";
import RHFTextField from "@/ui/RHFTextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import ContinueButton from "@/ui/ContinueButton";

const ShippingForm = ({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const router = useRouter();

  const handelShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handelShippingForm)}
    >
      {/* name */}
      <RHFTextField<ShippingFormInputs>
        label="نام و نام خانوادگی"
        name="name"
        dir="rtl"
        register={register}
        errors={errors.name}
        isRequired
        placeholder="نام و نام خانوادگی خود را وارد کنید"
      />

      {/* email */}
      <RHFTextField<ShippingFormInputs>
        type="email"
        label="ایمیل"
        name="email"
        dir="ltr"
        register={register}
        errors={errors.email}
        isRequired
        placeholder="example@domain.com"
      />

      {/* phone */}
      <RHFTextField<ShippingFormInputs>
        type="tel"
        label="شماره موبایل"
        name="phone"
        dir="ltr"
        register={register}
        errors={errors.phone}
        isRequired
        placeholder="09123456789"
      />
      {/* address */}
      <RHFTextField<ShippingFormInputs>
        label="آدرس"
        name="address"
        dir="rtl"
        register={register}
        errors={errors.address}
        isRequired
        placeholder="آدرس کامل خود را وارد کنید"
      />
      {/* city */}
      <RHFTextField<ShippingFormInputs>
        label="شهر"
        name="city"
        dir="rtl"
        register={register}
        errors={errors.city}
        isRequired
        placeholder="شهر خود را وارد کنید"
      />

      {/* Submit button */}
      <ContinueButton type="submit" isLoading={isSubmitting}>
        ادامه خرید
      </ContinueButton>
    </form>
  );
};

export default ShippingForm;
