
## &lt;gold-password-input&gt;

`<gold-password-input>` is a single-line text field with Material Design styling for entering a password.

    <gold-password-input></gold-password-input>

It may include a Strength Meter based on [zxcvbn](https://github.com/dropbox/zxcvbn)

    <gold-password-input strength-meter></gold-password-input>

It may include an optional label, which by default is "Password".

    <gold-password-input label="Account Password"></gold-password-input>

It may include a minLength and maxLength to restrict the length of the password

    <gold-password-input min-length="6" max-length="24"></gold-password-input>

See `Polymer.PaperInputBehavior` for more API docs.

### Validation

It may include a pattern to validate the password.

    <gold-password-input pattern="[a-zA-Z1-9!/;:]*"></gold-password-input>

or use a validator as specified in `Polymer.PaperInputBehavior`

The input can be automatically validated as the user is typing by using the `auto-validate` and `required` attributes. For manual validation, the element also has a `validate()` method, which returns the validity of the input as well as sets any appropriate error messages and styles.

See `Polymer.PaperInputBehavior` for more API docs.

### Styling

See `Polymer.PaperInputContainer` for a list of custom properties used to
style this element.

