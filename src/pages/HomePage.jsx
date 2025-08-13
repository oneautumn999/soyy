import GlitchText from "../components/GlitchText";
import GradientText from "../components/GradientText";
import ProfileCard from "../components/ProfileCard";
import ShinyText from "../components/ShinyText";
import ProfileImage from "../assets/Images/Soy.png";
import IconImage from "../assets/Images/iconpattern.png";
import GrainImage from "../assets/Images/grain.jpg";
import ListFriend from "../static-data/friend-list";
import DiscordLogo from "../assets/Images/discord.svg";
import FriendSlider from "../components/FriendSlider";
import { useTheme } from "../components/styling/ThemeContext";
import RollingGallery from "../components/RollGall";
import ImageList from "../static-data/image-list";
function HomePage() {
  const { themeColors } = useTheme();
  return (
    <div className="relative min-h-[80vh] w-full ">
      <section id="home" className="flex items-center relative pb-40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-1 md:order-1">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <GlitchText
                    speed={1}
                    enableShadows={true}
                    enableOnHover={false}
                    className="custom-class"
                  >
                    Hello
                  </GlitchText>
                </div>
                <ShinyText
                  text="GREETINGS FROM SOYAA"
                  disabled={false}
                  speed={3}
                  className="custom-class text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-medium"
                />
              </div>
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={6}
                showBorder={false}
                className="custom-class"
              >
                <p className="text-lg text-muted-foreground/80 whitespace-pre-line">
                  <span className="text-black dark:text-white">🌸</span> Just a
                  sweet girl who loves to smile and make others laugh!
                  <br />
                  <span className="text-black dark:text-white">✨</span> Honest,
                  kind, and always full of fun energy!
                  <br />
                  <span className="text-black dark:text-white">💖</span> I love
                  exploring cute games, making new friends, and spreading good
                  vibes~
                  <br />
                  <span className="text-black dark:text-white">🎀</span>{" "}
                  Building little dream worlds and dressing up in the cutest
                  outfits!
                  <br />
                  <span className="text-black dark:text-white">💫</span> If
                  you're kind and real, we’ll get along perfectly 🥰
                  <br />
                  <span className="text-black dark:text-white">🌈💕</span> Let’s
                  make Roblox a little more magical together!
                </p>
              </GradientText>

              <div className="flex flex-wrap gap-3 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
                <span
                  className={`px-4 py-2 text-sm rounded-full ${themeColors.backgroundSecondary} ${themeColors.text} ${themeColors.border}`}
                >
                  SWEET
                </span>
                <span
                  className={`px-4 py-2 text-sm rounded-full ${themeColors.backgroundSecondary} ${themeColors.text} ${themeColors.border}`}
                >
                  KIND
                </span>
                <span
                  className={`px-4 py-2 text-sm rounded-full ${themeColors.backgroundSecondary} ${themeColors.text} ${themeColors.border}`}
                >
                  FUN
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                <div className="flex gap-4">
                  <button
                    onClick={() =>
                      document
                        .getElementById("contacts")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${themeColors.backgroundSecondary} ${themeColors.text} ${themeColors.border} shadow hover:opacity-90 h-10 rounded-md group relative overflow-hidden px-8`}
                  >
                    <span className="relative z-10">Contact Me</span>
                    <div className="absolute inset-0 opacity-20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </button>
                  <button
                    onClick={() =>
                      document
                        .getElementById("photos")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${themeColors.backgroundSecondary} ${themeColors.text} ${themeColors.border} shadow hover:opacity-90 h-10 rounded-md group relative overflow-hidden px-8`}
                  >
                    <span className="relative z-10">Photos Of ME</span>
                    <div className="absolute inset-0 opacity-10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative order-2 md:order-2">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <ProfileCard
                  name="Soyaa"
                  title="Love Yapiing"
                  handle="yosep.p.m"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl={ProfileImage}
                  grainUrl={GrainImage}
                  iconUrl={IconImage}
                  showUserInfo={true}
                  enableTilt={true}
                  onContactClick={() => console.log("Contact clicked")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-16 mt-10">
        <h2 className={`text-3xl font-bold mb-8 ${themeColors.text}`}>
          About Me
        </h2>
        <div className="grid lg:grid-cols-1 gap-8">
          <div
            className={`rounded-xl border shadow p-12 hover:shadow-lg transition-shadow 
              ${themeColors.backgroundSecondary} ${themeColors.text} ${themeColors.border}`}
          >
            <h3 className="text-xl font-semibold mb-4">
              🌸 A Sweet Soul Spreading Joy 🌸
            </h3>
            <p className={`text-justify ${themeColors.textLight}`}>
              🌸 Hi there! I'm just a sweet soul who loves to bring smiles and
              sprinkle a little joy wherever I go! ✨ I’m all about kindness,
              laughter, and making every moment a little more magical. 💖 You’ll
              often find me exploring adorable games, building dreamy worlds, or
              dressing up in the cutest outfits! 🎀 I love connecting with kind,
              genuine people and creating fun memories together. 💫 Whether
              we’re teaming up for an adventure or just vibing, I’m always here
              to spread good vibes and smiles! 🌈💕 Let’s make this digital
              world a bit brighter—together!
            </p>
          </div>
        </div>
      </section>

      <section id="photos" className="scroll-mt-16 mt-10">
        <h2 className={`text-3xl font-bold mb-8 ${themeColors.text}`}>
          MY CUTIE PIE
        </h2>
        <div
          className={`relative h-[60vh] min-h-[400px] w-full ${themeColors.backgroundSecondary} rounded-xl border ${themeColors.border}`}
        >
          <RollingGallery
            autoplay={true}
            pauseOnHover={true}
            images={ImageList}
            themeBgClass={themeColors.backgroundSecondary}
          />
        </div>
      </section>

      <section id="contacts" className="scroll-mt-16 mt-10">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold mb-4 ${themeColors.text}`}>
            Let's Connect
          </h2>
          <p className={`${themeColors.footerText} mb-12 max-w-2xl`}>
            Let's be friend, We Can Sharing Or Even Playing Game 😊
          </p>
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
            {/* Left box: your contact info */}
            <div
              className={`w-full rounded-xl border shadow p-8 hover:shadow-lg transition-shadow 
                ${themeColors.backgroundSecondary} ${themeColors.text} ${themeColors.border}`}
            >
              <form className="space-y-6">
                <h3 className="text-2xl font-semibold">Reach Me On 👇</h3>

                <div className="flex items-center gap-3">
                  <img
                    src={DiscordLogo}
                    alt="Discord Icon"
                    className="w-6 h-6 dark:invert"
                  />
                  <a
                    href="https://discordapp.com/users/missoyaa"
                    target="_blank"
                    rel="noreferrer"
                    className={`${themeColors.accent} hover:underline`}
                  >
                    missoyaa
                  </a>
                </div>

                <h3 className="text-2xl font-semibold">Hobbies</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <p className={themeColors.textLight}>Gaming 🎮</p>
                    <p className={themeColors.textLight}>Flower 🌸</p>
                    <p className={themeColors.textLight}>Sleep 💤</p>
                    <p className={themeColors.textLight}>Coffee ☕</p>
                  </div>
                </div>
              </form>
            </div>
            {/* Right box: List of friends */}
            <div
              className={`w-full rounded-xl border shadow p-8 hover:shadow-lg transition-shadow 
                ${themeColors.backgroundSecondary} ${themeColors.text} ${themeColors.border}`}
            >
              <h3 className="text-2xl font-semibold mb-6">Friends</h3>
              <FriendSlider friends={ListFriend} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
