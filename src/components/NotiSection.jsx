export default function NotiSection({ id, title, notis }) {
  return (
    <section id={id} className="text-center w-full h-screen pt-20 px-4">
      <h2 className="font-bold text-4xl mb-8">{title}</h2>

      <ul className="pl-6 text-left">
        {notis.map((noti, idx) => (
          <li className="mb-4">
            <h3 className="font-bold text-xl">{idx + 1}. {noti.title}</h3>
            <p>{noti.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
