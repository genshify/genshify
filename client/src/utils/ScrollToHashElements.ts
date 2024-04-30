import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

//this component is used to scroll to the element with the id specified in the hash of the url when navigated from different page

const ScrollToHashElement = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const { hash } = location;

    const removeHashCharacter = (str:string) => {
      const result = str.slice(1);
      return result;
    };

    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          inline: 'nearest',
        });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement;