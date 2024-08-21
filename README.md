This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


Plan for bookings

Create new page ✔
Add basic jsx and css ✔
Link new page to menu ✔

Make a new component called "ContactForm" ✔
import it into the new page. ✔
create form element 
Get the whole form looking how it should first (JSX and CSS)

Create state variable
Console log variable

- Create contact us folder ✔
- Create page.js in the folder ✔
- Replace phone number with a Button link to contact us page ✔
- Create contact us form✔
  - Personal info fieldset✔
  - Contact info fieldset✔
  
- Create state to track the first input field ✔
- Create onChange handler for the first input field
  - console log the field value
- Create state for the rest of the fields✔
- Create handler for the rest the field
- Check that no form fields are empty on submit
  - Show error if empty field
- Console.log all the form data

- Clear out all the form fields apart from one
- Removing the state
- Removing the logic in the onChange handler
- Remove the HTML
> Check out work
＜
- Submitted correctly
- Submitted an error
- Create an initial state object that mimicks the state we have
- Create a reducer function
- Connect those two things to useReducer
> Check our work
- Remove fullName state
- Remove setFullName state
- Remove references to fullName State
- Add references to state.data. fullName
> Check our work