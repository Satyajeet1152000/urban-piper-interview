"use client";

import React, { useState } from "react";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/libs/schema";
import { z } from "zod";

interface FormData {
	name: string;
	email: string;
	dob: string;
	password: string;
}

const SignInFormWrapper = () => {
	const router = useRouter();

	const form = useForm<z.infer<typeof SignInSchema>>({
		defaultValues: {
			name: "",
			email: "",
			dob: "",
			password: "",
		},
		resolver: zodResolver(SignInSchema),
	});
	const {
		handleSubmit,
		watch,
		formState: { errors },
	} = form;

	const name = watch("name");
	const email = watch("email");
	const dob = watch("dob");
	const password = watch("password");

	const [currentStep, setCurrentStep] = useState<number>(1);

	const handleNext = async () => {
		if (currentStep < 4) {
			setCurrentStep(currentStep + 1);
		}
	};

	const handleBack = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleInputChange =
		(field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
			form.setValue(field, e.target.value);
		};

	const onSubmit = (values: z.infer<typeof SignInSchema>) => {
		console.log(values);
		router.push("/success");
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<form onAbort={form.handleSubmit(onSubmit)}></form>
			{currentStep === 1 && (
				<Screen1
					name={name}
					onChange={handleInputChange("name")}
					onNext={handleNext}
					// error={errors.name}
				/>
			)}

			{currentStep === 2 && (
				<Screen2
					email={email}
					onChange={handleInputChange("email")}
					onNext={handleNext}
					onBack={handleBack}
					// error={errors.email}
				/>
			)}

			{currentStep === 3 && (
				<Screen3
					dob={dob}
					onChange={handleInputChange("dob")}
					onNext={handleNext}
					onBack={handleBack}
					// error={errors.dob}
				/>
			)}

			{currentStep === 4 && (
				<Screen4
					password={password}
					onChange={handleInputChange("password")}
					onSubmit={handleSubmit(onSubmit)}
					onBack={handleBack}
					error={errors}
				/>
			)}
		</div>
	);
};

export default SignInFormWrapper;
