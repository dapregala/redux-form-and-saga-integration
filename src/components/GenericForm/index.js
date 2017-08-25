
const GenericForm = ({handleSubmit, formSubmitAction, children}) => {
    const submit = handleSubmit(formSubmitAction);
    return (
        <View keyboardShouldPersistTaps={'handled'}>
            {children}
        </View>
    )
};