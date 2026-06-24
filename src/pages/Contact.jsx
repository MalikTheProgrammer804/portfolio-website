import emailjs from "@emailjs/browser";
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_p1979oc",
      "template_68cylgh",
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      "Sr9MmCpw0OBf4ddNa"
    );

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    console.log(error);
    alert("Failed to send email");
  }
};