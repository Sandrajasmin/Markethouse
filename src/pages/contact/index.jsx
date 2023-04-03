import { useFormik } from "formik";
import * as Yup from "yup";
import contactImg from "../contact/contactimg.png";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Full name must be at least 3 characters")
        .required("Full name is required"),
    subject: Yup.string()
        .min(3, "Subject must be at least 3 characters")
        .required("Subject is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    message: Yup.string()
        .min(3, "Message must be at least 3 characters")
        .required("Message is required"),
});

const ContactForm = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			message: "",
		},
		validationSchema,
		onSubmit: (values) => {
			console.log("values", values);
		},
	});

	return (
		<>
			<form onSubmit={formik.handleSubmit} className="pt-5 relative bg-white dark:bg-primaryblue">
				<img src={contactImg} className="w-full" alt="office with employes" />
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between gap-5">
                    <div className="md:w-1/2 flex flex-col justify-center md:border-r dark:border-green my-10 ">
						<h1 className="font-body text-2xl my-5 dark:text-white">Let's work togheter</h1>
						<p className="text-sm font-body font-light mb-5 dark:text-white ">
							Sapien cursus dolor sed enim nibh purus. Sollicitudin ullamcorper mauris semper nullam at. Pulvinar
							ultrices iaculis sit purus. Cursus varius sit posuere consectetur pharetra. Dictum pretium lectus
							vestibulum quis nunc sit amet. Ultrices ac lobortis egestas urna mi varius pretium leo tortor. Accumsan
							dui faucibus semper sed. Dictum nulla quis phasellus ac sit malesuada iaculis in.
						</p>
					</div>
					<div className="md:w-1/2 md:pt-20">
						<div className="">
							<label htmlFor="name" className="block text-sm font-body font-semibold leading-6 text-gray-900 dark:text-white">
								Name
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="name"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.name}
									id="name"
									className="block w-full font-body font-light rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								/>
								{formik.touched.name && formik.errors.name ? <div className="font-body text-red-500 font-light text-sm">{formik.errors.name}</div> : null}
							</div>
						</div>
						<div className="">
							<label htmlFor="email" className="block text-sm font-body mt-5 font-semibold leading-6 text-gray-900 dark:text-white">
								Email
							</label>
							<div className="mt-2.5">
								<input
									name="email"
									type="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
									autoComplete="email"
                                    className="block w-full font-body font-light rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								/>
                                {formik.touched.email && formik.errors.email ? <div className="font-body text-red-500 font-light text-sm">{formik.errors.email}</div> : null}
							</div>
						</div>
                        <div className="">
                            <label htmlFor="email" className="block text-sm font-body mt-5 font-semibold leading-6 text-gray-900 dark:text-white">
                                Subject
                            </label>
                            <div className="mt-2.5">
                                <input
                                    name="subject"
                                    type="subject"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.subject}
                                    className="block w-full font-body font-light rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                />
                                {formik.touched.subject && formik.errors.subject ? <div className="font-body text-red-500 font-light text-sm">{formik.errors.subject}</div> : null}
                            </div>
                        </div>
						<div className="mt-5">
							<div className="flex justify-between text-sm leading-6">
                                <label htmlFor="message" className="block text-sm font-body font-semibold leading-6 text-gray-900 dark:text-white">
									How can we help you?
								</label>
                                <p id="message-description" className="text-gray-400 font-body font-light">
									Max 500 characters
								</p>
							</div>
							<div className="mt-2.5">
								<textarea
									id="message"
									name="message"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.message}
									rows="4"
									aria-describedby="message-description"
                                    className="block w-full rounded-md font-body font-light border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								></textarea>
                                {formik.touched.message && formik.errors.message ? <div className="font-body text-red-500 font-light text-sm">{formik.errors.message}</div> : null}
							</div>
						</div>
						<div className="flex justify-end py-8">
							<button
								type="submit"
								className="rounded-md bg-beig dark:bg-green px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								Send message
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default ContactForm;
