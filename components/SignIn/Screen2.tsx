import React from "react";

interface Screen2Props {
	email: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onNext: () => void;
	onBack: () => void;
	error?: { message?: string };
}

const Screen2 = ({ email, onChange, onNext, onBack, error }: Screen2Props) => {
	return (
		<div className='border-2 border-gray-500 shadow-2xl rounded-lg p-4 flex flex-col justify-between items-start gap-4 h-52 w-fit'>
			<button onClick={onBack} className='text-blue-500 cursor-pointer'>
				{"<"}Back
			</button>
			<label className='gap-2'>
				Email:
				<input
					type='email'
					value={email}
					onChange={onChange}
					required
					placeholder='Enter your email'
					className='border-2 border-gray-500'
				/>
			</label>
			{error && error.message && (
				<p className='text-red-500 text-sm'>{error.message}</p> // Display the error message
			)}
			<button
				onClick={onNext}
				disabled={!email}
				className='border-2 border-gray-500 shadow-2xl px-2 rounded-md flex flex-col justify-center items-center gap-4 cursor-pointer'
			>
				Next
			</button>
		</div>
	);
};

export default Screen2;
