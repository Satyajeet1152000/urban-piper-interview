import React from "react";

interface Screen3Props {
	dob: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onNext: () => void;
	onBack: () => void;
	error?: { message?: string };
}

const Screen3 = ({ dob, onChange, onNext, onBack, error }: Screen3Props) => {
	return (
		<div className='border-2 border-gray-500 shadow-2xl rounded-lg p-4 flex flex-col justify-between items-start gap-4 h-52 w-fit'>
			<button onClick={onBack} className='text-blue-500 cursor-pointer'>
				{"<"}Back
			</button>
			<label>
				Date of Birth:
				<input
					type='date'
					value={dob}
					onChange={onChange}
					required
					placeholder='Enter your date of birth'
					className='border-2 border-gray-500'
				/>
			</label>
			{error && error.message && (
				<p className='text-red-500 text-sm'>{error.message}</p> // Display the error message
			)}
			<button
				onClick={onNext}
				disabled={!dob}
				className='border-2 border-gray-500 shadow-2xl px-2 rounded-md flex flex-col justify-center items-center gap-4 cursor-pointer'
			>
				Next
			</button>
		</div>
	);
};

export default Screen3;
