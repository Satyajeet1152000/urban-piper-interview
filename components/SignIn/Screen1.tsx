import React from "react";

interface Screen1Props {
	name: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onNext: () => void;
}

const Screen1 = ({ name, onChange, onNext }: Screen1Props) => {
	return (
		<div className='border-2 border-gray-500 shadow-2xl rounded-lg p-4 flex flex-col justify-center items-start gap-4 h-52 w-fit'>
			<label className='flex flex-col gap-2'>
				Name:
				<input
					type='text'
					value={name}
					onChange={onChange}
					required
					placeholder='Enter your name'
					className='border-2 border-gray-500'
				/>
			</label>
			<button
				onClick={onNext}
				disabled={!name}
				className='border-2 border-gray-500 shadow-2xl px-2 rounded-md flex flex-col justify-center items-center gap-4 cursor-pointer'
			>
				Next
			</button>
		</div>
	);
};

export default Screen1;
