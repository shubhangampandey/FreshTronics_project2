export const ContactForm = () => {
  return (
    <form className="bg-white box-border caret-transparent w-full mb-[30px]">
      <div
        role="alert"
        className="text-zinc-800 text-[15px] bg-white shadow-[rgb(229,25,25)_4px_0px_0px_0px_inset,rgba(0,0,0,0.3)_1px_1px_4px_0px] box-border caret-transparent hidden mb-5 pl-[22px] pr-5 py-[15px] rounded-sm md:mb-[30px]"
      ></div>
      <div className="box-border caret-transparent block flex-wrap mb-5 mx-0 md:flex md:ml-[-15px] md:mr-[-15px]">
        <div className="box-border caret-transparent basis-auto grow-0 mb-5 px-0 md:basis-[0%] md:grow md:mb-0 md:px-[15px]">
          <div className="box-border caret-transparent">
            <label className="text-zinc-900/70 box-border caret-transparent block leading-5 pointer-events-none mb-1.5 pt-1.5 font-sf_pro_display_regular md:mb-[7.6px]">
              First Name
            </label>
            <div className="relative box-border caret-transparent after:accent-auto after:box-border after:caret-transparent after:text-neutral-400 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:bottom-0 after:inset-x-2/4 after:font-apple_system">
              <input
                type="text"
                name="name-1"
                value=""
                placeholder="Enter your first name"
                className="text-zinc-900 bg-transparent box-border caret-transparent block leading-[20.8px] text-start w-full border-neutral-200 pt-2.5 pb-[9px] px-0 border-t-0 border-x-0 border-b border-solid font-sf_pro_display_regular"
              />
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent basis-auto grow-0 px-0 md:basis-[0%] md:grow md:px-[15px]">
          <div className="box-border caret-transparent">
            <label className="text-zinc-900/70 box-border caret-transparent block leading-5 pointer-events-none mb-1.5 pt-1.5 font-sf_pro_display_regular md:mb-[7.6px]">
              Last Name
            </label>
            <div className="relative box-border caret-transparent after:accent-auto after:box-border after:caret-transparent after:text-neutral-400 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:bottom-0 after:inset-x-2/4 after:font-apple_system">
              <input
                type="text"
                name="name-2"
                value=""
                placeholder="Enter your Last name"
                className="text-zinc-900 bg-transparent box-border caret-transparent block leading-[20.8px] text-start w-full border-neutral-200 pt-2.5 pb-[9px] px-0 border-t-0 border-x-0 border-b border-solid font-sf_pro_display_regular"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent block flex-wrap mb-5 mx-0 md:flex md:ml-[-15px] md:mr-[-15px]">
        <div className="box-border caret-transparent basis-auto grow-0 px-0 md:basis-[0%] md:grow md:px-[15px]">
          <div className="box-border caret-transparent">
            <label className="text-zinc-900/70 box-border caret-transparent block leading-5 pointer-events-none mb-1.5 pt-1.5 font-sf_pro_display_regular md:mb-[7.6px]">
              Company Name
            </label>
            <div className="relative box-border caret-transparent after:accent-auto after:box-border after:caret-transparent after:text-neutral-400 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:bottom-0 after:inset-x-2/4 after:font-apple_system">
              <input
                type="text"
                name="text-1"
                value=""
                placeholder="Enter your company name"
                className="text-zinc-900 bg-transparent box-border caret-transparent block leading-[20.8px] text-start w-full border-neutral-200 pt-2.5 pb-[9px] px-0 border-t-0 border-x-0 border-b border-solid font-sf_pro_display_regular"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent block flex-wrap mb-5 mx-0 md:flex md:ml-[-15px] md:mr-[-15px]">
        <div className="box-border caret-transparent basis-auto grow-0 px-0 md:basis-[0%] md:grow md:px-[15px]">
          <div className="box-border caret-transparent">
            <label className="text-zinc-900/70 box-border caret-transparent block leading-5 pointer-events-none mb-1.5 pt-1.5 font-sf_pro_display_regular md:mb-[7.6px]">
              Work Email ID
            </label>
            <div className="relative box-border caret-transparent after:accent-auto after:box-border after:caret-transparent after:text-neutral-400 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:bottom-0 after:inset-x-2/4 after:font-apple_system">
              <input
                type="email"
                name="email-1"
                value=""
                placeholder="Enter your work email id"
                className="text-zinc-900 bg-transparent box-border caret-transparent block leading-[20.8px] text-start w-full border-neutral-200 pt-2.5 pb-[9px] px-0 border-t-0 border-x-0 border-b border-solid font-sf_pro_display_regular"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent block flex-wrap mb-5 mx-0 md:flex md:ml-[-15px] md:mr-[-15px]">
        <div className="box-border caret-transparent basis-auto grow-0 px-0 md:basis-[0%] md:grow md:px-[15px]">
          <div className="box-border caret-transparent">
            <label className="text-zinc-900/70 box-border caret-transparent block leading-5 pointer-events-none mb-1.5 pl-[41px] pt-1.5 font-sf_pro_display_regular md:mb-[7.6px]">
              Phone Number
            </label>
            <div className="relative box-border caret-transparent min-h-10">
              <div className="absolute box-border caret-transparent shrink-0 left-0 top-0.5 bottom-0">
                <button
                  type="button"
                  aria-label="Selected country"
                  role="combobox"
                  title="United States"
                  className="relative items-center bg-transparent caret-transparent flex h-full text-center w-[31px] z-[1] mr-2.5 p-0"
                >
                  <div className="items-center box-border caret-transparent gap-x-[3px] flex h-full gap-y-[3px] pt-2.5 pb-[9px] hover:bg-black/10">
                    <div className="relative bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3616px_0px] rounded-[1px]"></div>
                    <div className="relative border-b-neutral-400 border-t-neutral-600 box-border caret-transparent h-0 w-0 ml-[5px] border-t-4 border-x-transparent border-x-[3px]"></div>
                  </div>
                </button>
                <div className="absolute bg-white shadow-[rgba(0,0,0,0.2)_1px_1px_4px_0px] box-border caret-transparent hidden z-[2] border border-stone-300 -ml-px mt-[3px] rounded-[3px] border-solid">
                  <input
                    type="text"
                    placeholder="Search"
                    role="combobox"
                    aria-label="Search"
                    className="text-black box-border caret-transparent text-start w-full p-0 rounded-[3px]"
                  />
                  <ul
                    role="listbox"
                    aria-label="List of countries"
                    className="box-border caret-transparent list-none max-h-[185px] overflow-x-auto overflow-y-scroll w-full pl-0"
                  >
                    <li
                      role="option"
                      className="items-center bg-black/10 box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-48px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Afghanistan
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +93
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-224px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Åland Islands
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +358
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-96px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Albania
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +355
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-960px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Algeria
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +213
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-160px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        American Samoa
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-16px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Andorra
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +376
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-128px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Angola
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +244
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-80px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Anguilla
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-64px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Antigua &amp; Barbuda
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-144px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Argentina
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +54
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-112px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Armenia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +374
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-208px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Aruba
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +297
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:0px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Ascension Island
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +247
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-192px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Australia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +61
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-176px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Austria
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +43
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-240px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Azerbaijan
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +994
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-496px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Bahamas
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-352px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Bahrain
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +973
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-288px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Bangladesh
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +880
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-272px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Barbados
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-544px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Belarus
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +375
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-304px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Belgium
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +32
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-560px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Belize
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +501
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-384px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Benin
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +229
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-416px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Bermuda
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-512px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Bhutan
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +975
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-448px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Bolivia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +591
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-256px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Bosnia &amp; Herzegovina
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +387
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-528px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Botswana
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +267
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-480px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Brazil
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +55
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1632px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        British Indian Ocean Territory
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +246
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3712px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        British Virgin Islands
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-432px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Brunei
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +673
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-336px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Bulgaria
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +359
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-320px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Burkina Faso
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +226
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-368px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Burundi
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +257
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1808px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Cambodia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +855
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-720px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Cameroon
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +237
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-576px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Canada
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-800px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Cape Verde
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +238
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-464px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Caribbean Netherlands
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +599
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1920px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Cayman Islands
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-624px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Central African Republic
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +236
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3360px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Chad
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +235
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-704px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Chile
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +56
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-736px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        China
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +86
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-832px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Christmas Island
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +61
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-592px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Cocos (Keeling) Islands
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +61
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-752px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Colombia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +57
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1840px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Comoros
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +269
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-640px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Congo - Brazzaville
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +242
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-608px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Congo - Kinshasa
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +243
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-688px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Cook Islands
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +682
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-768px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Costa Rica
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +506
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-672px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Côte d’Ivoire
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +225
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1504px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Croatia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +385
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-784px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Cuba
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +53
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-816px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Curaçao
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +599
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-848px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Cyprus
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +357
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-864px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Czechia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +420
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-912px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Denmark
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +45
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-896px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Djibouti
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +253
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-928px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Dominica
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-944px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Dominican Republic
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-976px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Ecuador
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +593
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1008px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Egypt
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +20
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3280px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        El Salvador
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +503
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1376px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Equatorial Guinea
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +240
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1040px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Eritrea
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +291
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-992px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Estonia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +372
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3328px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Eswatini
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +268
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1072px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Ethiopia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +251
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1120px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Falkland Islands
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +500
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1152px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Faroe Islands
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +298
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1104px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Fiji
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +679
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1088px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Finland
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +358
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1168px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        France
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +33
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1248px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        French Guiana
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +594
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2736px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        French Polynesia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +689
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1184px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Gabon
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +241
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1328px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Gambia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +220
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1232px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Georgia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +995
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-880px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Germany
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +49
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1280px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Ghana
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +233
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1296px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Gibraltar
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +350
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1392px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Greece
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +30
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1312px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Greenland
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +299
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1216px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Grenada
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1360px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Guadeloupe
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +590
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1424px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Guam
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1408px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Guatemala
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +502
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1264px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Guernsey
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +44
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1344px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Guinea
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +224
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1440px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Guinea-Bissau
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +245
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1456px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Guyana
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +592
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1520px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Haiti
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +509
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1488px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Honduras
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +504
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1472px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Hong Kong SAR China
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +852
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1536px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Hungary
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +36
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1680px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Iceland
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +354
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1616px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        India
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +91
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1552px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Indonesia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +62
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1664px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Iran
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +98
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1648px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Iraq
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +964
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1568px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Ireland
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +353
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1600px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Isle of Man
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +44
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1584px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Israel
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +972
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1696px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Italy
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +39
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1728px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Jamaica
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1760px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Japan
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +81
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1712px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Jersey
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +44
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1744px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Jordan
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +962
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1936px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Kazakhstan
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +7
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1776px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Kenya
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +254
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1824px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Kiribati
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +686
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3808px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Kosovo
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +383
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1904px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Kuwait
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +965
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1792px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Kyrgyzstan
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +996
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1952px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Laos
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +856
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2096px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Latvia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +371
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1968px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Lebanon
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +961
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2048px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Lesotho
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +266
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2032px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Liberia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +231
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2112px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Libya
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +218
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2000px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Liechtenstein
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +423
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2064px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Lithuania
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +370
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2080px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Luxembourg
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +352
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2304px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Macao SAR China
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +853
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2208px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Madagascar
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +261
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2432px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Malawi
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +265
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2464px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Malaysia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +60
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2416px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Maldives
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +960
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2256px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Mali
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +223
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2384px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Malta
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +356
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2224px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Marshall Islands
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +692
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2336px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Martinique
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +596
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2352px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Mauritania
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +222
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2400px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Mauritius
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +230
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3840px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Mayotte
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +262
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2448px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Mexico
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +52
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1136px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Micronesia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +691
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2160px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Moldova
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +373
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2144px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Monaco
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +377
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2288px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Mongolia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +976
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2176px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Montenegro
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +382
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2368px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Montserrat
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2128px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Morocco
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +212
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2480px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Mozambique
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +258
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2272px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Myanmar (Burma)
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +95
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2496px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Namibia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +264
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2640px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Nauru
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +674
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2624px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Nepal
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +977
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2592px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Netherlands
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +31
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2512px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        New Caledonia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +687
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2672px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        New Zealand
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +64
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2576px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Nicaragua
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +505
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2528px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Niger
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +227
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2560px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Nigeria
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +234
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2656px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Niue
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +683
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2544px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Norfolk Island
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +672
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1872px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        North Korea
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +850
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2240px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        North Macedonia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +389
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2320px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Northern Mariana Islands
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2608px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Norway
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +47
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2688px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Oman
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +968
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2784px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Pakistan
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +92
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2880px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Palau
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +680
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2848px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Palestinian Territories
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +970
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2704px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Panama
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +507
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2752px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Papua New Guinea
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +675
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2896px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Paraguay
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +595
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2720px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Peru
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +51
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2768px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Philippines
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +63
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2800px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Poland
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +48
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2864px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Portugal
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +351
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2832px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Puerto Rico
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2912px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Qatar
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +974
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2928px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Réunion
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +262
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2944px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Romania
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +40
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2976px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Russia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +7
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2992px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Rwanda
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +250
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3792px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Samoa
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +685
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3184px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        San Marino
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +378
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3264px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        São Tomé &amp; Príncipe
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +239
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3008px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Saudi Arabia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +966
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3200px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Senegal
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +221
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2960px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Serbia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +381
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3040px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Seychelles
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +248
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3168px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Sierra Leone
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +232
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3088px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Singapore
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +65
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3296px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Sint Maarten
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3152px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Slovakia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +421
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3120px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Slovenia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +386
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3024px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Solomon Islands
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +677
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3216px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Somalia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +252
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3856px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        South Africa
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +27
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1888px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        South Korea
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +82
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3248px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        South Sudan
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +211
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1056px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Spain
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +34
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2016px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Sri Lanka
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +94
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-400px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        St. Barthélemy
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +590
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3104px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        St. Helena
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +290
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1856px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        St. Kitts &amp; Nevis
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1984px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        St. Lucia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2192px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        St. Martin
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +590
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-2816px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        St. Pierre &amp; Miquelon
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +508
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3680px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        St. Vincent &amp; Grenadines
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3056px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Sudan
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +249
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3232px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Suriname
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +597
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3136px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Svalbard &amp; Jan Mayen
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +47
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3072px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Sweden
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +46
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-656px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Switzerland
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +41
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3312px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Syria
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +963
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3552px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Taiwan
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +886
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3408px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Tajikistan
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +992
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3568px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Tanzania
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +255
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3392px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Thailand
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +66
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3440px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Timor-Leste
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +670
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3376px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Togo
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +228
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3424px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Tokelau
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +690
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3488px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Tonga
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +676
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3520px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Trinidad &amp; Tobago
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3472px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Tunisia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +216
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3504px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Turkey
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +90
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3456px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Turkmenistan
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +993
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3344px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Turks &amp; Caicos Islands
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3536px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Tuvalu
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +688
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3728px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        U.S. Virgin Islands
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3600px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Uganda
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +256
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3584px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Ukraine
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +380
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-32px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        United Arab Emirates
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +971
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1200px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        United Kingdom
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +44
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3616px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        United States
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +1
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3632px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Uruguay
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +598
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3648px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Uzbekistan
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +998
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3760px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Vanuatu
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +678
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3664px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Vatican City
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +39
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3696px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Venezuela
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +58
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3744px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Vietnam
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +84
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3776px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Wallis &amp; Futuna
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +681
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-1024px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Western Sahara
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +212
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3824px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Yemen
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +967
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3872px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Zambia
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +260
                      </span>
                    </li>
                    <li
                      role="option"
                      className="items-center box-border caret-transparent flex p-2"
                    >
                      <div className="bg-[url('https://icanio.com/wp-content/plugins/forminator/assets/img/flags.webp')] bg-no-repeat bg-size-[3904px_12px] shadow-[rgb(136,136,136)_0px_0px_1px_0px] box-border caret-transparent h-3 w-4 bg-[position:-3888px_0px] mr-2 rounded-[1px]"></div>
                      <span className="box-border caret-transparent block mr-2">
                        Zimbabwe
                      </span>
                      <span className="text-neutral-400 box-border caret-transparent block">
                        +263
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute box-border caret-transparent left-[41px] right-0 top-0 after:accent-auto after:box-border after:caret-transparent after:text-neutral-400 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:bottom-0 after:inset-x-2/4 after:font-apple_system">
                <input
                  type="text"
                  name="phone-1"
                  value=""
                  placeholder="Enter your phone number"
                  className="relative text-zinc-900 bg-transparent box-border caret-transparent block leading-[20.8px] text-start w-full z-0 border-neutral-200 pl-[46px] pr-1.5 pt-2.5 pb-[9px] border-t-0 border-x-0 border-b border-solid font-sf_pro_display_regular"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent block flex-wrap mb-5 mx-0 md:flex md:ml-[-15px] md:mr-[-15px]">
        <div className="box-border caret-transparent basis-auto grow-0 px-0 md:basis-[0%] md:grow md:px-[15px]">
          <div className="box-border caret-transparent">
            <div className="relative box-border caret-transparent">
              <textarea
                name="textarea-1"
                placeholder="Leave us a message..."
                className="text-zinc-900 bg-transparent box-border caret-transparent block leading-5 min-h-20 resize-y text-start w-full border-neutral-200 pt-3 pb-[9px] px-[9px] rounded-sm font-sf_pro_display_regular"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <input
        type="hidden"
        name="referer_url"
        value=""
        className="text-black bg-transparent box-border caret-transparent hidden text-start p-0"
      />
      <div className="box-border caret-transparent block flex-wrap mb-5 mx-0 md:flex md:ml-[-15px] md:mr-[-15px]">
        <div className="box-border caret-transparent basis-auto grow-0 px-0 md:basis-[0%] md:grow md:px-[15px]">
          <div className="box-border caret-transparent">
            <button className="relative text-white text-sm font-medium bg-sky-900 caret-transparent leading-[20.3px] min-w-[100px] text-center w-full z-[1] overflow-hidden mb-2.5 px-[9px] py-[18px] rounded-bl rounded-br rounded-tl rounded-tr font-sf_pro_display_regular md:mb-0">
              <span className="relative box-border caret-transparent block z-[2]">
                Submit
              </span>
              <span className="absolute bg-black/10 box-border caret-transparent block w-0 z-[1] rounded-[100%] left-2/4 top-2/4"></span>
            </button>
          </div>
        </div>
      </div>
      <input
        type="hidden"
        name="forminator_nonce"
        value="9c489d1896"
        className="text-black bg-transparent box-border caret-transparent hidden text-start p-0"
      />
      <input
        type="hidden"
        name="_wp_http_referer"
        value="/"
        className="text-black bg-transparent box-border caret-transparent hidden text-start p-0"
      />
      <input
        type="hidden"
        name="form_id"
        value="6073"
        className="text-black bg-transparent box-border caret-transparent hidden text-start p-0"
      />
      <input
        type="hidden"
        name="page_id"
        value="3321"
        className="text-black bg-transparent box-border caret-transparent hidden text-start p-0"
      />
      <input
        type="hidden"
        name="form_type"
        value="default"
        className="text-black bg-transparent box-border caret-transparent hidden text-start p-0"
      />
      <input
        type="hidden"
        name="current_url"
        value="https://icanio.com/"
        className="text-black bg-transparent box-border caret-transparent hidden text-start p-0"
      />
      <input
        type="hidden"
        name="render_id"
        value="0"
        className="text-black bg-transparent box-border caret-transparent hidden text-start p-0"
      />
      <input
        type="hidden"
        name="action"
        value="forminator_submit_form_custom-forms"
        className="text-black bg-transparent box-border caret-transparent hidden text-start p-0"
      />
      <input
        type="hidden"
        name="pum_form_popup_id"
        value="6083"
        className="text-black bg-transparent box-border caret-transparent hidden text-start p-0"
      />
    </form>
  );
};
