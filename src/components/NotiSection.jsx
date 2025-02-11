export default function NotiSection({ id, title, notis }) {
  return (
    <section id={id} className="text-center w-full h-screen pt-20 px-4">
      <h2 className="font-bold text-4xl mb-4">{title}</h2>

      <ul className="list-decimal pl-6">
        {notis.map((noti) => (
          <li key={noti} className="font-bold text-left text-xl mb-2">{noti}</li>  
        ))}
      </ul>
    </section>
  );
}
