export const BRAND_BLUE = "#94BCE2";

export const BRAND_GREY = "#8A8D90"; 

export const BRAND_BLACK = "#404042";

export const Mailto = ({ email, subject, body, ...props }) => {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }