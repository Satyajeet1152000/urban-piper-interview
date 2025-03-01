"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

const SuccessScreen = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 3000);
	}, [router]);

	return (
		<div className='flex flex-col items-center justify-center h-screen border-2'>
			<h1>Success!</h1>
			<p>Your signup was successful. You will be redirected shortly.</p>
		</div>
	);
};

export default SuccessScreen;
