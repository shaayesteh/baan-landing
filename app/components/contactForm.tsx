export default function ContactForm(){
    return(
        <section
        id="contact"
        className="w-full max-w-4xl flex flex-col items-center gap-6"
      >
        <h3 className="text-3xl font-bold">شروع همکاری</h3>
        <p className="text-gray-600 text-center">
          فرم زیر را پر کنید تا با شما تماس بگیریم.
        </p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfR9eLz4-FLO4_nYRC78vNCDQgCn14EHRCDUCuY2g_PZjKSpQ/viewform?embedded=true"
          width="100%"
          height="600"
          className="rounded-xl border"
          loading="lazy"
        ></iframe>
      </section>
    )
}