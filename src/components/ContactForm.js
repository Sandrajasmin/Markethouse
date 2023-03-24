import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().min(10, 'Minimum 10 characters').required('Message is required'),

})

function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

const ContactForm = () => {

    const formikForm = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema,
        validateEmail,
        onSubmit: (values) => {
            console.log("values", values);
        },
    });

    return (
        <>
            <form onSubmit={formikForm.handleSubmit} className="mt-16">
                <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="name" className="block font-body text-sm font-semibold leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="name"
                                value={formikForm.values.name}
                                onChange={formikForm.handleChange}
                                onBlur={formikForm.handleBlur}
                                id="name"
                                placeholder="Enter your name"
                                className="block w-full font-body rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                            {formikForm.touched.name && formikForm.errors.name ? <div className="text-red-400 text-sm">{formikForm.errors.name}</div> : null}
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold font-body leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                value={formikForm.values.email}
                                onChange={formikForm.handleChange}
                                onBlur={formikForm.handleBlur}
                                placeholder="Enter your email"
                                validate={validateEmail}
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                            {formikForm.touched.email && formikForm.errors.email ? <div className="text-red-400 text-sm">{formikForm.errors.email}</div> : null}
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <div className="flex justify-between text-sm leading-6">
                            <label htmlFor="message" className="block text-sm font-semibold font-body leading-6 text-gray-900">
                                How can we help you?
                            </label>
                            <p id="message-description" className="text-gray-400 font-body">
                                Max 500 characters
                            </p>
                        </div>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formikForm.values.message}
                                onChange={formikForm.handleChange}
                                onBlur={formikForm.handleBlur}
                                aria-describedby="message-description"
                                placeholder="Please write your message"
                                className="block w-full rounded-md font-body border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            ></textarea>
                            {formikForm.touched.message && formikForm.errors.message ? <div className="text-red-400 text-sm">{formikForm.errors.message}</div> : null}
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                    <button
                        type="submit"
                        className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        Send message
                    </button>
                </div>
            </form>
        </>
    );
};
export default ContactForm;
