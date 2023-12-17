import css from './ContactForm.module.css';
const ContactForm = ({ name, number, handleChange, handleSubmit }) => (
  <div className={css.contactForm}>
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number:
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button className={css.nameBtn} type="submit">
        Add contact
      </button>
    </form>
  </div>
);

export { ContactForm };
