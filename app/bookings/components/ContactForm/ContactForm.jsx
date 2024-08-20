export default function ContactForm() {
    return(
    <form>
        <fieldset>
            <legend>
                Personal information
            </legend>
            <label for="name">Full Name:  </label>
            <input type='text' id='name' name='name' required minlength="4" maxlength="8" size="10" />
        </fieldset>
    </form>

    )
}