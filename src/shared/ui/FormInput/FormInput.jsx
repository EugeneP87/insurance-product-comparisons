import { Input, InputError, Label, PhoneInput, TextArea } from 'shared/ui';
import styles from './FormInput.module.scss';

function FormInput({
	labelMode,
	inputId,
	textLabel,
	errorMessage,
	errorMode,
	name,
	id,
	mode,
	type,
	phone,
	textarea,
}) {
	return (
		<div className={styles.box}>
			<Label
				labelMode={labelMode}
				inputId={inputId}
				textLabel={textLabel}
			></Label>
			{phone ? (
				<PhoneInput
					mode={mode}
					name={name}
					id={id}
					type={type}
					isValid
					required
				/>
			) : textarea ? (
				<TextArea name={name} id={id} mode={mode} />
			) : (
				<Input mode={mode} name={name} id={id} type={type} isValid required />
			)}
			<InputError
				errorMode={errorMode}
				errorMessage={errorMessage}
				isVisible
			></InputError>
		</div>
	);
}

export default FormInput;
