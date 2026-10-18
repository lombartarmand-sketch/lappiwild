import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactHeader from "../components/contact/ContactHeader";
import ContactForm from "../components/contact/ContactForm";
import AvailabilityCalendar from "../components/contact/AvailabilityCalendar";

export default function ContactPage() {
  return (
    <>
  <ContactHeader />

  <main className="bg-[#10261D] text-white">
    <ContactForm />
    <AvailabilityCalendar />
  </main>

  <Footer />
</>
  );
}