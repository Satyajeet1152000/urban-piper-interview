"use client";

import React, { useState } from "react";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import { useRouter } from "next/navigation";

interface FormData {
	name: string;
	email: string;
	dob: string;
	password: string;
}

const SignInFormWrapper = () => {
	const router = useRouter();
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		dob: "",
		password: "",
	});

	const [currentStep, setCurrentStep] = useState<number>(1);

	const handleNext = () => {
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
			setFormData({
				...formData,
				[field]: e.target.value,
			});
		};

	const handleSubmit = () => {
		console.log(formData);
		router.push("/success");
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			{currentStep === 1 && (
				<Screen1
					name={formData.name}
					onChange={handleInputChange("name")}
					onNext={handleNext}
				/>
			)}

			{currentStep === 2 && (
				<Screen2
					email={formData.email}
					onChange={handleInputChange("email")}
					onNext={handleNext}
					onBack={handleBack}
				/>
			)}

			{currentStep === 3 && (
				<Screen3
					dob={formData.dob}
					onChange={handleInputChange("dob")}
					onNext={handleNext}
					onBack={handleBack}
				/>
			)}

			{currentStep === 4 && (
				<Screen4
					password={formData.password}
					onChange={handleInputChange("password")}
					onSubmit={handleSubmit}
					onBack={handleBack}
				/>
			)}
		</div>
	);
};

export default SignInFormWrapper;
