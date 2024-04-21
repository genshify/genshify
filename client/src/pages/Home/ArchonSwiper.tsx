import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useThemeContext } from "../../contexts/ThemeContext";
import { dendroTheme,pyroTheme,hydroTheme,geoTheme,electroTheme,cryoTheme,anemoTheme } from "genshin-optimizer/ui";

const archons = {
  nahida: {
    name: "Nahida",
    element: "Dendro",
    theme: dendroTheme,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/dfk0ut3-fb4e6ebd-5c41-41e5-98c1-35cdb0ab8d53.png/v1/fill/w_786,h_1016/nahida_genshin_impact_character_render_by_deg5270_dfk0ut3-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY1NCIsInBhdGgiOiJcL2ZcLzVlNTg5NmE1LTRhNzktNDk2YS1iZWE0LTgxZjI2Y2ZhMjY1MFwvZGZrMHV0My1mYjRlNmViZC01YzQxLTQxZTUtOThjMS0zNWNkYjBhYjhkNTMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.AtqnmnR4uN1v657CtgthGOEuuQ0fVP91ZD4OYTyMKUw",
  },
  raiden: {
    name: "Raiden Shogun",
    element: "Electro",
    theme: electroTheme,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/deqwe2o-ee69d7a5-f766-4868-b426-83a1e8082856.png/v1/fill/w_787,h_1015/shogun_raiden_genshin_impact_character_render_by_deg5270_deqwe2o-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY1MSIsInBhdGgiOiJcL2ZcLzVlNTg5NmE1LTRhNzktNDk2YS1iZWE0LTgxZjI2Y2ZhMjY1MFwvZGVxd2Uyby1lZTY5ZDdhNS1mNzY2LTQ4NjgtYjQyNi04M2ExZTgwODI4NTYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Y_j5MMzLiw-G7zs39l1UuArESK3741U4ufQQlfgB_uw",
  },
  zhongli: {
    name: "Zhongli",
    element: "Geo",
    theme: geoTheme,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/deeqrmg-2f0ccbc4-b403-43d2-b105-d62ca5a3fc94.png/v1/fit/w_828,h_964/zhongli_genshin_impact_character_render_by_deg5270_deeqrmg-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5MCIsInBhdGgiOiJcL2ZcLzVlNTg5NmE1LTRhNzktNDk2YS1iZWE0LTgxZjI2Y2ZhMjY1MFwvZGVlcXJtZy0yZjBjY2JjNC1iNDAzLTQzZDItYjEwNS1kNjJjYTVhM2ZjOTQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.rdRHGbC_oRjnpMnNxbcQMhqK-QjoDaf2zfqoTHsIbPI",
  },
  venti: {
    name: "Venti",
    element: "Anemo",
    theme: anemoTheme,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37d1e25f-6ff6-4deb-8dc6-a67cf25efc98/dfb4y91-df8b5e99-ee2c-46ca-ba0f-08119feb1ee2.png/v1/fit/w_828,h_794/_genshin_impact__venti_full_render__gacha_art__by_nagarachireal_dfb4y91-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzkxOCIsInBhdGgiOiJcL2ZcLzM3ZDFlMjVmLTZmZjYtNGRlYi04ZGM2LWE2N2NmMjVlZmM5OFwvZGZiNHk5MS1kZjhiNWU5OS1lZTJjLTQ2Y2EtYmEwZi0wODExOWZlYjFlZTIucG5nIiwid2lkdGgiOiI8PTQwODMifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6pIdI04kFff2JL4M8GOKbwouTzHZnKRhEXj9o6w1csc",
  },
  murata: {
    name: "Murata",
    element: "Pyro",
    theme: pyroTheme,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/dfk0ut3-fb4e6ebd-5c41-41e5-98c1-35cdb0ab8d53.png/v1/fill/w_786,h_1016/nahida_genshin_impact_character_render_by_deg5270_dfk0ut3-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY1NCIsInBhdGgiOiJcL2ZcLzVlNTg5NmE1LTRhNzktNDk2YS1iZWE0LTgxZjI2Y2ZhMjY1MFwvZGZrMHV0My1mYjRlNmViZC01YzQxLTQxZTUtOThjMS0zNWNkYjBhYjhkNTMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.AtqnmnR4uN1v657CtgthGOEuuQ0fVP91ZD4OYTyMKUw",
  },
  furina: {
    name: "furina",
    element: "Hydro",
    theme: hydroTheme,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4c61658e-d4be-4618-b1fa-e9594b9b6908/dgett44-15111d84-b2f7-4f36-8c03-ff9fceda0d2c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRjNjE2NThlLWQ0YmUtNDYxOC1iMWZhLWU5NTk0YjliNjkwOFwvZGdldHQ0NC0xNTExMWQ4NC1iMmY3LTRmMzYtOGMwMy1mZjlmY2VkYTBkMmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JUBq34wdfl1XogZdQ4xEvm3fECJAdUsUkcgkY5GLozk",
  },
  tsarista: {
    name: "Tsarista",
    element: "Cryo",
    theme: cryoTheme,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/dfk0ut3-fb4e6ebd-5c41-41e5-98c1-35cdb0ab8d53.png/v1/fill/w_786,h_1016/nahida_genshin_impact_character_render_by_deg5270_dfk0ut3-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY1NCIsInBhdGgiOiJcL2ZcLzVlNTg5NmE1LTRhNzktNDk2YS1iZWE0LTgxZjI2Y2ZhMjY1MFwvZGZrMHV0My1mYjRlNmViZC01YzQxLTQxZTUtOThjMS0zNWNkYjBhYjhkNTMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.AtqnmnR4uN1v657CtgthGOEuuQ0fVP91ZD4OYTyMKUw",
  },
};

export default function ArchonSwiper() {
  const { changeTheme } = useThemeContext();
  const swiper = useSwiper();
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      //i want to console log the key of the archon when the slide changes
      onSlideChange={(swiper) =>
        changeTheme(archons[Object.keys(archons)[swiper.realIndex]].theme)
      }
    >
      {Object.keys(archons).map((archon) => (
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={archon}
        >
          <img
            onClick={() => {
              swiper.slideTo(4);
            }}
            src={archons[archon].image}
            className="home-img"
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
