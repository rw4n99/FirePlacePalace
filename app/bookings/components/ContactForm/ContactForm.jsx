export default function ContactForm() {
    return(
    <form>
        <fieldset>
            <legend>
                Personal information
            </legend>
            <div className="name">
                <label for="name">Full Name:  </label>
                <input type='text' id='name' name='name' required minlength="4" maxlength="8" size="10" />
            </div>
            <div className="postcode">
                <label for="postcode">Postcode:  </label>
                <input type='text' id='postcode' name='postcode' />
            </div>
            <div className="streetName">
                <label for="streetName">House number and Street name:  </label>
                <input type='text' id='streetName' name='streetName' />
            </div>
            <div className="city">
                <label for="city">City:  </label>
                <input type='text' id='city' name='city' />
            </div>
        </fieldset>
    </form>

    )
}