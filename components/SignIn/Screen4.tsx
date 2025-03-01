import React from "react";

interface Screen4Props {
	password: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: () => void;
	onBack: () => void;
	error?: { [key: string]: { message?: string } };
}

const Screen4 = ({
	password,
	onChange,
	onSubmit,
	onBack,
	error,
}: Screen4Props) => {
	return (
		<div className='border-2 border-gray-500 shadow-2xl rounded-lg p-4 flex flex-col justify-between items-start gap-4 h-52 w-fit'>
			<button onClick={onBack} className='text-blue-500 cursor-pointer'>
				{"<"}Back
			</button>
			<label>
				Password:
				<input
					type='password'
					value={password}
					onChange={onChange}
					required
					placeholder='Enter your password'
					className='border-2 border-gray-500'
				/>
			</label>
			{error &&
				Object.keys(error).map((field, index) => (
					<p key={index} className='text-red-500 text-sm'>
						{error[field]?.message}
					</p>
				))}
			<button
				onClick={onSubmit}
				disabled={!password}
				className='border-2 border-gray-500 shadow-2xl px-2 rounded-md flex flex-col justify-center items-center gap-4 cursor-pointer'
			>
				Submit
			</button>
		</div>
	);
};

export default Screen4;
