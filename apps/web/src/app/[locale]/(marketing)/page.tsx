import { StatisticCards } from './cards';
import { CarouselDemo } from './carousel';
import ShiftingCountdown from './countdown';
import { DottedButton } from './course-button';
import { DrawOutlineButton } from './draw-outline-button';
import GetStartedButton from './get-started-button';
import GradientHeadline from './gradient-headline';
import { Button } from '@repo/ui/components/ui/button';
import {
  AppWindow,
  Bot,
  CodeXml,
  DraftingCompass,
  FileSpreadsheet,
  FolderKanban,
  Megaphone,
  Trophy,
} from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function MarketingPage() {
  const t = await getTranslations();

  return (
    <div className="flex w-full flex-col items-center">
      <div className="text-foreground flex max-w-6xl flex-col gap-4 px-3 pt-8">
        <div className="text-center text-2xl font-bold md:text-4xl">
          Chương trình nổi bật
        </div>
        <CarouselDemo />

        {/* <div className="via-foreground/10 w-full bg-gradient-to-r from-transparent to-transparent p-[1px]" /> */}

        {/* <div className="text-foreground flex flex-col gap-8">
          <h2 className="text-center font-bold md:text-lg">
            {t('home.features-lead')}
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, subtitle, url, icon }) => (
              <Link
                href={url || '#'}
                key={title}
                className="border-foreground/20 hover:border-foreground group relative flex flex-col rounded-lg border p-6"
              >
                <h3 className="min-h-[40px] font-bold">{title}</h3>
                <div className="flex grow flex-col justify-between gap-4">
                  <p className="text-sm opacity-80">{subtitle}</p>
                  <div className="opacity-60 group-hover:opacity-100">
                    {icon}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div> */}
      </div>

      <div className="mt-8 flex w-full flex-col items-center bg-gradient-to-br from-blue-100 via-yellow-200 to-red-100 p-2 pt-4 md:p-8">
        <div className="flex w-full max-w-6xl flex-col gap-6 px-3 text-black">
          <div className="relative text-center text-2xl font-bold md:text-4xl">
            <div className="bg-red pointer-events-none absolute inset-0 z-50 h-full w-full bg-gradient-to-r from-blue-100/50 via-green-200/20 to-red-200/50 blur-xl"></div>
            Thành công là HAI{' '}
            <span className="text-emerald-700 underline decoration-wavy underline-offset-4">
              hành trình
            </span>
            , không phải là{' '}
            <span className="text-violet-700 underline decoration-dotted underline-offset-4">
              điểm đến
            </span>
            .
          </div>
          <StatisticCards />
        </div>
      </div>

      <div className="mt-8 flex w-full flex-col items-center p-2 md:p-8">
        <div className="text-foreground flex w-full max-w-6xl flex-col gap-8 px-3">
          <div className="text-center text-2xl font-bold md:text-4xl">
            Tổng hợp lộ trình học
          </div>

          <div className="via-foreground/10 w-full bg-gradient-to-r from-transparent to-transparent p-[1px]" />

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="mb-4 text-lg font-semibold md:text-2xl">
                Khai phá tiềm năng (6-12 tuổi)
              </div>
              <div className="mb-8 max-w-md opacity-70">
                Con có thiên hướng tư duy logic hay tư duy sáng tạo? Khám phá lộ
                trình phù hợp để con được trải nghiệm, bộc lộ và phát huy tối đa
                năng lực của mình.
              </div>

              <div className="flex flex-col gap-4">
                <DottedButton>
                  <div className="flex w-full items-center justify-center">
                    <div className="bg-foreground text-background rounded-full p-2">
                      <CodeXml className="h-6 w-6" />
                    </div>
                  </div>
                  Khóa học Lập trình
                </DottedButton>
                <DottedButton>
                  <div className="flex w-full items-center justify-center">
                    <div className="bg-foreground text-background rounded-full p-2">
                      <Bot className="h-6 w-6" />
                    </div>
                  </div>
                  Khóa học Robotics: Lắp ráp & chế tạo robot STEM
                </DottedButton>
                <DottedButton>
                  <div className="flex w-full items-center justify-center">
                    <div className="bg-foreground text-background rounded-full p-2">
                      <DraftingCompass className="h-6 w-6" />
                    </div>
                  </div>
                  Khóa học Digital Art (Mỹ thuật số): Lộ trình vẽ painting
                </DottedButton>
              </div>
            </div>
            <Image
              src="https://next.vohoangphuc.com/genius-junior/feature-1.png"
              alt="Feature 1"
              width={1080}
              height={1080}
            />
            <div className="col-span-full flex justify-start">
              <Button className="w-full md:w-fit">
                Tổng hợp lộ trình 6-12 tuổi
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-foreground/10 flex w-full flex-col items-center p-2 md:p-8">
        <div className="text-foreground flex w-full max-w-6xl flex-col gap-6 px-3">
          <div className="grid gap-4 md:grid-cols-2">
            <Image
              src="https://next.vohoangphuc.com/genius-junior/feature-2.png"
              alt="Feature 2"
              width={1080}
              height={1080}
            />
            <div>
              <div className="mb-4 text-lg font-semibold md:text-2xl">
                Bệ phóng nhân tài (13-17 tuổi)
              </div>
              <div className="mb-8 max-w-md opacity-70">
                Lối đi nào để con trở thành nhà lãnh đạo công nghệ tương lai?
                Giúp con phát triển phẩm chất, kỹ năng và tư duy làm chủ ngay từ
                khi còn ngồi trên ghế nhà trường.
              </div>

              <div className="flex flex-col gap-4">
                <DottedButton>
                  <div className="flex w-full items-center justify-center">
                    <div className="bg-foreground text-background rounded-full p-2">
                      <CodeXml className="h-6 w-6" />
                    </div>
                  </div>
                  Khóa học Lập trình
                </DottedButton>
                <DottedButton>
                  <div className="flex w-full items-center justify-center">
                    <div className="bg-foreground text-background rounded-full p-2">
                      <Bot className="h-6 w-6" />
                    </div>
                  </div>
                  Khóa học Robotics: Lắp ráp & chế tạo robot STEM
                </DottedButton>
                <DottedButton>
                  <div className="flex w-full items-center justify-center">
                    <div className="bg-foreground text-background rounded-full p-2">
                      <DraftingCompass className="h-6 w-6" />
                    </div>
                  </div>
                  Khóa học Digital Art (Mỹ thuật số): Lộ trình vẽ painting
                </DottedButton>
              </div>
            </div>
            <div className="col-span-full flex justify-end">
              <Button className="w-full md:w-fit">
                Tổng hợp lộ trình 13-17 tuổi
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-foreground flex w-full flex-col items-center p-2 md:p-8">
        <div className="text-background flex w-full max-w-6xl flex-col gap-6 px-3">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="mb-4 text-lg font-semibold md:text-2xl">
                Dấn thân (18 tuổi trở lên)
              </div>
              <div className="mb-8 max-w-md opacity-70">
                Chinh phục những công nghệ và kỹ năng mới để tạo ra những sản
                phẩm có ý nghĩa cho cộng đồng và xã hội. Sẵn sàng bắt đầu sự
                nghiệp mơ ước chỉ trong 6-8 tháng.
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <DottedButton className="col-span-full" isDark>
                  <div className="flex w-full items-center justify-center">
                    <div className="bg-foreground text-background rounded-full p-2">
                      <AppWindow className="h-6 w-6" />
                    </div>
                  </div>
                  Khóa học lập trình Web (Full-Stack): Code cơ bản đến nâng cao
                </DottedButton>
                <DottedButton isDark>
                  <div className="flex w-full items-center justify-center">
                    <div className="bg-foreground text-background rounded-full p-2">
                      <FileSpreadsheet className="h-6 w-6" />
                    </div>
                  </div>
                  Khóa học Data Analyst: Phân tích dữ liệu cho người mới bắt đầu
                </DottedButton>
                <DottedButton isDark>
                  <div className="flex w-full items-center justify-center">
                    <div className="bg-foreground text-background rounded-full p-2">
                      <FileSpreadsheet className="h-6 w-6" />
                    </div>
                  </div>
                  Khóa học Business Analyst (IT): Phân tích nghiệp vụ phần mềm
                </DottedButton>
                <DottedButton isDark>
                  <div className="flex w-full items-center justify-center">
                    <div className="bg-foreground text-background rounded-full p-2">
                      <DraftingCompass className="h-6 w-6" />
                    </div>
                  </div>
                  Khóa học UI/UX Design từ cơ bản đến nâng cao
                </DottedButton>
                <DottedButton isDark>
                  <div className="flex w-full items-center justify-center">
                    <div className="bg-foreground text-background rounded-full p-2">
                      <Megaphone className="h-6 w-6" />
                    </div>
                  </div>
                  Khóa học Marketing Online chuyên sâu cho người mới bắt đầu
                </DottedButton>
                <DottedButton isDark>
                  <div className="flex w-full items-center justify-center">
                    <div className="bg-foreground text-background rounded-full p-2">
                      <FolderKanban className="h-6 w-6" />
                    </div>
                  </div>
                  Khóa học Product Management (Quản lý Sản phẩm)
                </DottedButton>
                <DottedButton isDark>
                  <div className="flex w-full items-center justify-center">
                    <div className="bg-foreground text-background rounded-full p-2">
                      <DraftingCompass className="h-6 w-6" />
                    </div>
                  </div>
                  Khóa học Thiết kế Đồ họa (Graphic Design) chuyên sâu
                </DottedButton>
              </div>
            </div>
            <Image
              src="https://next.vohoangphuc.com/genius-junior/feature-3.png"
              alt="Feature 3"
              width={1080}
              height={1080}
              className="h-full object-cover"
            />
            <DrawOutlineButton>
              Tổng hợp lộ trình cho sinh viên và người đi làm
            </DrawOutlineButton>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center bg-gradient-to-br from-amber-300 via-red-200 to-violet-300 p-8">
        <div className="text-foreground flex w-full max-w-6xl flex-col gap-6 px-3">
          <div className="grid gap-4 md:grid-cols-2">
            <Image
              src="https://next.vohoangphuc.com/genius-junior/feature-4.png"
              alt="Feature 2"
              width={1080}
              height={1080}
            />
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-4 bg-gradient-to-tr from-amber-600 to-violet-600 bg-clip-text py-2 text-5xl font-bold text-transparent">
                Tự tin bước ra thế giới
              </div>
              <div className="mb-8 max-w-md text-black">
                Hành trang để mở rộng cơ hội ra bên ngoài lãnh thổ Việt Nam, ứng
                tuyển vào những công ty công nghệ trên toàn cầu.
              </div>

              <div className="flex flex-col gap-4">
                <DottedButton forceLight>
                  <div className="rounded-full bg-black p-2 text-white">
                    <Trophy className="h-6 w-6" />
                  </div>
                  Đăng ký nhận học bổng Global Developer
                </DottedButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex w-full flex-col items-center p-2 md:p-8">
        <div className="text-foreground flex w-full max-w-6xl flex-col gap-8 px-3">
          <div className="text-center text-2xl font-bold md:text-4xl">
            Học viên nổi bật
          </div>

          <div className="via-foreground/10 w-full bg-gradient-to-r from-transparent to-transparent p-[1px]" />

          <div className="grid gap-8 md:grid-cols-3">
            <div className="border-foreground bg-background text-foreground rounded-xl border-2 p-4 text-center transition duration-300 hover:-translate-y-1 hover:scale-105">
              <Image
                src="https://next.vohoangphuc.com/genius-junior/vhpx.jpg"
                alt="Student 1"
                width={1080}
                height={1080}
                className="mb-4 rounded-lg"
              />
              <div className="via-foreground/10 mb-2 w-full bg-gradient-to-r from-transparent to-transparent p-[1px]" />
              <div className="mb-2 text-2xl font-semibold">Võ Hoàng Phúc</div>
              <div className="opacity-70">
                Giải nhì kì thi Khoa học Kỹ thuật cấp tỉnh Khánh Hoà 2020
              </div>
            </div>
            <div className="border-foreground bg-background text-foreground rounded-xl border-2 p-4 text-center transition duration-300 hover:-translate-y-1 hover:scale-105">
              <Image
                src="https://next.vohoangphuc.com/genius-junior/vhpx.jpg"
                alt="Student 1"
                width={1080}
                height={1080}
                className="mb-4 rounded-lg"
              />
              <div className="via-foreground/10 mb-2 w-full bg-gradient-to-r from-transparent to-transparent p-[1px]" />
              <div className="mb-2 text-2xl font-semibold">Võ Hoàng Phúc</div>
              <div className="opacity-70">Kỹ sư phần mềm tại Tuturuuu</div>
            </div>
            <div className="border-foreground bg-background text-foreground rounded-xl border-2 p-4 text-center transition duration-300 hover:-translate-y-1 hover:scale-105">
              <Image
                src="https://next.vohoangphuc.com/genius-junior/vhpx.jpg"
                alt="Student 1"
                width={1080}
                height={1080}
                className="mb-4 rounded-lg"
              />
              <div className="via-foreground/10 mb-2 w-full bg-gradient-to-r from-transparent to-transparent p-[1px]" />
              <div className="mb-2 text-2xl font-semibold">Võ Hoàng Phúc</div>
              <div className="opacity-70">
                Technical Vice President tại câu lạc bộ Neo Culture Tech, đại
                học RMIT Vietnam
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="font-mono text-2xl font-semibold">
              Và hơn 40,000 học sinh tiêu biểu khác
            </div>
            <Button className="rounded-full">Xem thêm học viên nổi bật</Button>
          </div>
        </div>
      </div>

      <div className="via-foreground/10 my-4 w-full bg-gradient-to-r from-transparent to-transparent p-[1px] md:my-0" />

      <div className="mt-8 flex w-full flex-col items-center p-2 md:p-8">
        <div className="text-foreground flex w-full max-w-6xl flex-col gap-6 px-3">
          <div className="text-center text-2xl font-bold md:text-4xl">
            Đăng ký sớm để nhận{' '}
            <span className="text-red-500 underline">
              {' '}
              những ưu đãi hấp dẫn
            </span>{' '}
            cho{' '}
            <span className="bg-gradient-to-br from-red-500 via-violet-600 to-sky-500 bg-clip-text text-transparent">
              kì học mới
            </span>
            .
          </div>
          <div className="text-foreground flex w-full max-w-6xl flex-col gap-6 px-3">
            <ShiftingCountdown />
          </div>
        </div>
      </div>

      <div className="via-foreground/10 my-4 w-full bg-gradient-to-r from-transparent to-transparent p-[1px] md:my-0" />

      <div className="flex w-full flex-col items-center p-2 md:p-8">
        <div className="text-foreground flex w-full max-w-6xl flex-col gap-8 px-3">
          <div className="text-center text-2xl font-bold md:text-4xl">
            Tin tức nổi bật
          </div>

          <div className="via-foreground/10 w-full bg-gradient-to-r from-transparent to-transparent p-[1px]" />

          <div className="grid gap-4">
            <div className="border-foreground bg-background text-foreground flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 p-4 text-center transition duration-300 hover:-translate-y-1 md:flex-row">
              <Image
                src="https://next.vohoangphuc.com/genius-junior/vhpx.jpg"
                alt="Student 1"
                width={1080}
                height={1080}
                className="rounded-lg md:max-w-64"
              />
              <div className="my-2 mb-2 h-[1px] w-full bg-black p-[1px] md:mx-2 md:my-0 md:h-full md:w-[1px]" />
              <div className="flex flex-col items-center justify-center">
                <div className="mb-2 text-2xl font-semibold">
                  Tiếp cận trí tuệ nhân tạo (AI) cùng trẻ em
                </div>
                <div className="line-clamp-3 opacity-70">
                  Trí tuệ nhân tạo (AI) ngày càng trở thành một phần không thể
                  thiếu trong cuộc sống hàng ngày của chúng ta. Là những bậc cha
                  mẹ, chúng ta có trách nhiệm hướng dẫn và bảo vệ trẻ em bằng
                  cách: 👨‍👩‍👧‍👦 Hiểu biết cơ bản về AI: Ba mẹ cần chủ động hiểu về
                  ảnh hưởng của AI, từ các tác dụng tích cực đến khả năng dùng
                  AI cho học tập và công việc. Ví dụ, AI có thể hỗ trợ như kho
                  kiến thức cho trẻ học, một gia sư 24/7, điều chỉnh chương
                  trình học tập dựa trên tốc độ và phong cách học của trẻ, đồng
                  thời bổ trợ cho phương pháp học truyền thống.
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="bg-foreground text-background rounded-lg border px-4 py-1">
                    Trí tuệ nhân tạo
                  </div>
                  <div className="bg-foreground text-background rounded-lg border px-4 py-1">
                    Kiến thức cơ bản
                  </div>
                  <div className="bg-foreground text-background rounded-lg border px-4 py-1">
                    Người mới bắt đầu
                  </div>
                  <div className="bg-foreground text-background rounded-lg border px-4 py-1">
                    Trẻ em
                  </div>
                </div>
              </div>
            </div>
            <div className="border-foreground bg-background text-foreground flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 p-4 text-center transition duration-300 hover:-translate-y-1 md:flex-row">
              <Image
                src="https://next.vohoangphuc.com/genius-junior/vhpx.jpg"
                alt="Student 1"
                width={1080}
                height={1080}
                className="rounded-lg md:max-w-64"
              />
              <div className="my-2 mb-2 h-[1px] w-full bg-black p-[1px] md:mx-2 md:my-0 md:h-full md:w-[1px]" />
              <div className="flex flex-col items-center justify-center">
                <div className="mb-2 text-2xl font-semibold">
                  Xóa tan hiểu lầm về Scratch: Tại sao lập trình kéo thả lại là
                  một tiền đề quan trọng cho trẻ đột phá!
                </div>
                <div className="line-clamp-3 opacity-70">
                  Bạn nghĩ Scratch chỉ dành cho trẻ nhỏ? Nghĩ lại nhé! 🧩 Khi
                  bạn thấy những hình vẽ dễ thương và các khối kéo thả, có thể
                  nó trông “trẻ con”, nhưng Scratch không hề chỉ đơn giản như
                  vậy vì:
                  <br />
                  1. Tập trung vào logic: Lập trình bằng các khối giúp học sinh
                  tập trung để hiểu logic lập trình, không phải vật lộn với cú
                  pháp khi bắt đầu với ngôn ngữ mới. Tư duy lập trình là điều
                  quan trọng cho trẻ khi bắt đầu.
                  <br />
                  2. Vui nhộn và hấp dẫn: Việc tạo ra các trò chơi video và câu
                  chuyện với Scratch thật sự thú vị. Không còn những bài tập
                  nhàm chán - học sinh yêu thích đến mức họ còn tiếp tục lập
                  trình tại nhà!
                  <br />
                  3. Bao quát và dễ tiếp cận: Scratch phù hợp cho mọi lứa tuổi
                  và trình độ, khiến nó trở thành một công cụ đa năng có thể
                  phát triển cùng người học.
                  <br />
                  4. Công cụ chuyển tiếp hoàn hảo: Học Scratch có thể tạo tiền
                  đề cho trẻ chuyển lên các ngôn ngữ lập trình dạng văn bản như
                  JavaScript dễ dàng hơn. Scratch là một bước đệm mạnh mẽ vào
                  thế giới lập trình, giúp học sinh xây dựng nền tảng vững chắc
                  trong khi vẫn vui vẻ học tập. 🚀✨
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="bg-foreground text-background rounded-lg border px-4 py-1">
                    Scratch
                  </div>
                  <div className="bg-foreground text-background rounded-lg border px-4 py-1">
                    Lập trình
                  </div>
                  <div className="bg-foreground text-background rounded-lg border px-4 py-1">
                    Trẻ em
                  </div>
                </div>
              </div>
            </div>
            <div className="border-foreground bg-background text-foreground flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 p-4 text-center transition duration-300 hover:-translate-y-1 md:flex-row">
              <Image
                src="https://next.vohoangphuc.com/genius-junior/vhpx.jpg"
                alt="Student 1"
                width={1080}
                height={1080}
                className="rounded-lg md:max-w-64"
              />
              <div className="my-2 mb-2 h-[1px] w-full bg-black p-[1px] md:mx-2 md:my-0 md:h-full md:w-[1px]" />
              <div className="flex flex-col items-center justify-center">
                <div className="mb-2 text-2xl font-semibold">
                  Tư duy máy tính: Chìa khóa cho tương lai số
                </div>
                <div className="line-clamp-3 opacity-70">
                  Tư duy máy tính là cách suy nghĩ để giải quyết vấn đề như một
                  máy tính. Nó giúp ta chia nhỏ vấn đề, tìm quy luật và suy nghĩ
                  logic. 🧩🔍 Kỹ năng này cực kỳ quan trọng trong thời đại công
                  nghệ, giúp ta xử lý thông tin hiệu quả và sáng tạo hơn (source
                  ảnh: CAS Barefoot). Lập trình là cách tuyệt vời để rèn luyện
                  tư duy này. 👨‍💻👩‍💻 Khi viết code, ta học cách chia nhỏ nhiệm vụ,
                  suy nghĩ có trật tự và giải quyết vấn đề. Đó là lý do tại sao
                  việc dạy lập trình cho trẻ em ngày càng phổ biến. 🎓📚 Hãy
                  tưởng tượng bạn đang lập trình một trò chơi đơn giản. 🎮 Bạn
                  phải nghĩ về từng bước: vẽ nhân vật, di chuyển nhân vật, tính
                  điểm. Đó chính là tư duy máy tính trong hành động! 🏃‍♂️💯 Khóa
                  học "BÉ LÀM QUEN VỚI LẬP TRÌNH (CS101)" sẽ trang bị cho trẻ tư
                  duy này thông qua hoàn thành các tác vụ lập trình và tương
                  tác.
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="bg-foreground text-background rounded-lg border px-4 py-1">
                    Máy tính
                  </div>
                  <div className="bg-foreground text-background rounded-lg border px-4 py-1">
                    Lập trình
                  </div>
                  <div className="bg-foreground text-background rounded-lg border px-4 py-1">
                    Trẻ em
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Button className="rounded-full">Xem thêm bài viết</Button>
          </div>
        </div>

        <div className="via-foreground/10 my-8 w-full bg-gradient-to-r from-transparent to-transparent p-[1px]" />

        <div className="flex flex-col items-center">
          <div className="relative mb-4 text-center text-2xl font-bold md:text-4xl lg:text-7xl">
            <span className="sr-only">Genius Junior</span>
            <Image
              src="/media/logos/transparent.png"
              width={160}
              height={160}
              alt="Genius Junior Logo"
              priority
            />
          </div>

          <h1 className="mx-auto my-4 max-w-xl text-center text-lg font-semibold !leading-tight md:mb-8 md:text-2xl lg:text-3xl">
            {t('home.headline-p1')}{' '}
            <GradientHeadline title={t('home.headline-p2')} />.
          </h1>

          <GetStartedButton href="https://www.facebook.com/GeniusJuniorVietnam" />
        </div>
      </div>
    </div>
  );
}
