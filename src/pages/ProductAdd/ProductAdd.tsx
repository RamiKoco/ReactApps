import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {passwordRule} from "../../utils/validation/customValidationRules";
import FormikInput from "../../components/FormikInput/FormikInput";

type Props = {};

interface ProductAddForm {
	title: string;
	description: string;
	price: number;
	stock: number;
}
const ProductAdd = (props: Props) => {
	const initialValues: ProductAddForm = {
		title: "",
		description: "",
		price: 0,
		stock: 0,
	};

	const validationSchema = Yup.object({
		title: Yup.string()
			.required("Başlık alanı zorunludur.")
			.min(2, "Başlık en az 2 haneden oluşmalıdır.")
			.max(50)
			.test(
				"is-strong",
				"Bu alan en az 1 büyük, 1 küçük harf ve 1 numerik değer içermelidir",
				passwordRule,
			),
		description: Yup.string().required().min(5).max(300),
		price: Yup.number().min(0),
		stock: Yup.number().min(0).integer(),
	});

	return (
		<div className="container mt-5">
			<Formik
				validationSchema={validationSchema}
				initialValues={initialValues}
				onSubmit={values => {
					console.log(values);
				}}
			>
				<Form>
					<FormikInput name="title" label="Ürün Adı" />
					<FormikInput name="description" label="Ürün Açıklaması" />
					<FormikInput name="price" label="Ürün Fiyatı" type="number" />
					<FormikInput name="stock" label="Ürün Stok" type="number" />
					<button type="submit" className="btn btn-primary">
						Kaydet
					</button>
				</Form>
			</Formik>
		</div>
	);
};
//testtt
export default ProductAdd;