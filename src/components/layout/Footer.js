export default function Footer() {
	const email_reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target.mail.value;

		if (!email_reg.test(email)) {
			alert('Please enter a valid email address');
			return;
		} else {
			const data = {
				mail: email,
			};

			const JSONdata = JSON.stringify(data)

			const endpoint = '/api/send-query'

			const options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSONdata,
			}

			const response = fetch(endpoint, options).then((res) => res.json())

			if (response.status === 'ok') {
				alert('Success!')
			} else {
				alert('Something went wrong.')
			}

		}
	};

	return (
		<div className="fixed flex flex-col items-center justify-center inset-x-0 bottom-0 p-4 text-white mx-auto mt-8">
			<h4 className="mb-2 font-poppins">Need to Register or any Queries?</h4>
			<div className="relative">
				<form className="form-control" method="POST" onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="username@site.com"
						name="mail"
						id="mail"
						autoComplete="on"
						className="input input-primary w-auto pr-16"
					/>
					<button type="submit" className="btn btn-primary absolute right-0 rounded-l-none">Airwave</button>
				</form>
			</div>
		</div>
	);
}
