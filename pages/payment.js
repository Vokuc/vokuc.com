import { useState } from "react";
import Layout from "../components/layout";
import { usePaystackPayment } from "react-paystack";

export default function Payment() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [amount, setAmount] = useState("");
	const [email, setEmail] = useState("");
	const [item, setItem] = useState("");

	const config = {
		reference: new Date().getTime(),
		email,
		amount: amount * 100,
		firstName,
		lastName,
		item,
		publicKey: "pk_test_cc0a76f903e306632cf2a30b883e2633ed264efe",
	};

	const onSuccess = (reference) => {
		alert(`Payment with reference ${config.reference} was Successful`);
		setFirstName("");
		setLastName("");
		setEmail("");
		setAmount("");
		setItem("");
	};

	const onClose = () => {
		alert("closed");
	};

	const initializePayment = usePaystackPayment(config);
	const pay = (e) => {
		e.preventDefault();
		initializePayment(onSuccess, onClose);
	};

	return (
		<Layout>
			<div className="flex flex-col">
				<div className="p-2 m-2 bg-blue-900 rounded">
					<h2 className="flex justify-center">MAKE PAYMENT</h2>
				</div>
				<div className="flex flex-col m-2">
					<label className="p-1">First Name:</label>
					<input
						type="text"
						value={firstName}
						placeholder="what is your first name?"
						onChange={(e) => setFirstName(e.target.value)}
						className=" p-2 rounded bg-slate-800 border border-blue-900"
					/>
				</div>
				<div className="flex flex-col m-2">
					<label className="p-1">Last Name:</label>
					<input
						type="text"
						value={lastName}
						placeholder="what is your last name?"
						onChange={(e) => setLastName(e.target.value)}
						className=" p-2 rounded bg-slate-800 border border-blue-900"
					/>
				</div>
				<div className="flex flex-col m-2">
					<label className="p-1">Email:</label>
					<input
						type="email"
						value={email}
						placeholder="what is your email?"
						onChange={(e) => setEmail(e.target.value)}
						className=" p-2 rounded bg-slate-800 border border-blue-900"
					/>
				</div>
				<div className="flex flex-col m-2">
					<label className="p-1">Amount:</label>
					<input
						type="text"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						className=" p-2 rounded bg-slate-800 border border-blue-900"
					/>
				</div>
				<div className="flex flex-col m-2">
					<label className="p-1">Item:</label>
					<input
						type="text"
						value={item}
						onChange={(e) => setItem(e.target.value)}
						className=" p-2 rounded bg-slate-800 border border-blue-900"
					/>
				</div>
				<button
					type="submit"
					onClick={pay}
					className="bg-blue-900 rounded p-2 m-2"
				>
					PAY
				</button>
			</div>
		</Layout>
	);
}
