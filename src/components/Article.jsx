export default function Article({ title, image, date, text }) {
    return (
      <article>
        <time>{date}</time>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{text}</p>
        <a href="#">Continues ...</a>
      </article>
    );
  }
  