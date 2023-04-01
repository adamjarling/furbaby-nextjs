import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://rocks.us7.list-manage.com/subscribe/post?u=4c8d7e492a0e818026e69137a&amp;id=58cecb8155";

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div className="mt-6 text-left">
      <p className="pb-0 mb-1 text-base">Join the email list:</p>
      {status === "sending" && <div className="text-gray-200">sending...</div>}
      {status === "error" && (
        <div
          className="text-red-400"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="text-green-400"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status !== "success" && (
        <>
          <div className="flex flex-row ">
            <input
              ref={(node) => (email = node)}
              type="email"
              placeholder="Your email"
              className="mb-2 text-base"
            />
          </div>
          <button
            className="px-4 py-2 text-base text-black border-2 border-black"
            onClick={submit}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

const MailChimpForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <CustomForm
        status={status}
        message={message}
        onValidated={(formData) => subscribe(formData)}
      />
    )}
  />
);

export default MailChimpForm;
