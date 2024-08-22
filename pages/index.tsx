import {useState} from "react";


export default function Home() {
    const [name, setName] = useState('')
    const [region, setRegion] = useState('')
    const [phone, setPhone] = useState('')
    const [content, setContent] = useState('')

    const dataInsert = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/create', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, region, phone, content})
            })
            if (res.ok) {
                const data = res.json()
                console.log(data)
                setName('')
                setRegion('')
                setPhone('')
                setContent('')
                alert('상담 신청이 완료 되었습니다.\n최대한 빠르게 연락 드리겠습니다.')
            } else {
                console.log('error')
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div id="header"
                 className="z-0 grid grid-rows-1 grid-cols-5 items-center fixed top-0 w-full text-black bg-white p-2 px-6">
                <div className="flex item-center col-span-3 space-x-3">
                    <div className="font-bold">욕실수리 홈케어</div>
                </div>
                <div className="flex justify-end item-center col-span-2">
                    <span
                        className="rounded-2xl border-2 border-sky-500 text-black p-1.5 px-4 fw-boldest text-sm">010-8681-6763</span>
                </div>
            </div>

            <div className="pb-20">
                <div className="flex flex-col gap-x-6 sm:px-6 sm-py-24 mx-auto max-w-7xl mt-16 sm:mt-10">
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0">
                        <div className="flex flex-col flex-1 align-items-center">
                            <div className="flex font-bold text-md items-end justify-center mb-4 flex-1">욕실 전문 업체 욕실수리
                                홈케어
                            </div>
                            <hr style={{borderTop: "1px solid #ddd"}} className="border-0 mx-4"></hr>
                            <div className="flex flex-col justify-center text-center mt-8">
                                <strong className="text-sm text-slate-800 text-center">"20년 경험의 욕실 전문업체 욕실수리
                                    홈케어"</strong>
                                <p className="text-sm text-slate-800">서울, 경기 전 지역 24시간 무료상담 가능합니다.</p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img style={{height: '500px'}} src="./imgs/main1.jpg"
                                 alt="Front of men&#039;s Basic Tee in black."
                                 className="hover:opacity-40 h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                        </div>
                        <div className="flex-1">
                            <img src="./imgs/main2.jpg"
                                 alt="Front of men&#039;s Basic Tee in black."
                                 className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                        </div>
                    </div>

                    <div className="flex flex-1 mt-4 gap-x-1">
                        <div className="flex-1">
                            <img style={{height: "202px"}} src="./imgs/3.jpg"
                                 alt="Front of men&#039;s Basic Tee in black."
                                 className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                        </div>

                        <div className="flex-1">
                            <img style={{height: "202px"}} src="./imgs/4.jpg"
                                 alt="Front of men&#039;s Basic Tee in black."
                                 className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                        </div>

                        <div className="flex-1">
                            <img style={{height: "202px"}} src="./imgs/5.jpg"
                                 alt="Front of men&#039;s Basic Tee in black."
                                 className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                        </div>

                        <div className="flex-1">
                            <img style={{height: "202px"}} src="./imgs/6.jpg"
                                 alt="Front of men&#039;s Basic Tee in black."
                                 className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                        </div>

                        <div className="flex-1">
                            <img style={{height: "202px"}} src="./imgs/7.jpg"
                                 alt="Front of men&#039;s Basic Tee in black."
                                 className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                        </div>

                        <div className="flex-1">
                            <img style={{height: "202px"}} src="./imgs/8.jpg"
                                 alt="Front of men&#039;s Basic Tee in black."
                                 className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                        </div>

                    </div>

                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 mt-40">
                        <div className="flex flex-col flex-1 justify-center me-10">
                            <div>
                                <img style={{height: "300px"}} src="./imgs/main3.jpg"
                                     alt="Front of men&#039;s Basic Tee in black."
                                     className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                            </div>
                        </div>
                        <div className="flex flex-1 justify-center">
                            <div>
                                <h1 className="text-2xl">욕실수리 홈케어란?</h1>
                                <hr style={{borderTop: "1px solid #ddd"}} className="border-0 my-3"></hr>
                                <p className="text-sm">
                                    욕실수리 홈케어란 변기,세면대,싱크대등 주방과 욕실에 관한 전반적인 문제를 해결 하여 드립니다.
                                    변기막힘, 변기교체, 싱크대교체, 수도꼭지교체, 하수구막힘 등등 모든 문제에 관하여 24시간 상담 가능하고
                                    서울, 경기 전 지역 출장 가능합니다.
                                    <br/>
                                    <br/>
                                    욕실수리 홈케어는 20년 넘는 노하우와 기술로 문젱에 관한 원인을 정확히 분석하여
                                    고객님께 설명 드리고 최적의 방법으로 저렴한 솔루션을 제공하여 드립니다.
                                    <br/>
                                    <br/>
                                    20년동안 1000건이 넘는 다양한 작업으로 여러 문제를 해결 해왔으며
                                    수 많은 직원들이 다양한 경험으로 빠르고 적합한 솔루션을 제공 해드립니다.
                                    <br/>
                                    <br/>
                                    변기,세면대,싱크대 쉽게 해결 할 수 있을것 같지만 전문가의 도움이 필요 합니다.
                                    해결이 어려울 때 고민 없이 욕실수리 홈케어에 상담 해주세요
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col mt-32">
                        <div className="flex justify-center">
                            <span className="text-2xl text-gray-800">1</span>
                        </div>
                        <hr style={{borderTop: "1px solid #ddd"}} className="border-0 my-3"></hr>
                        <div className="flex justify-center">
                            <h1 className="text-lg">서울 지역</h1>
                        </div>

                        <div className="flex flex-col space-y-8 sm:flex-row sm:space-y-0 mt-20 gap-x-3">
                            <div className="flex flex-col flex-1">
                                <div className="flex-1 font-mono">서울 강서</div>
                                <hr style={{borderTop: "1px solid #ddd"}} className="border-0 my-4 me-12"></hr>
                                <div className="text-sm font-sans mb-5">강서구 강서로45다길</div>
                                <img style={{height: "300px"}} src="./imgs/9.jpg"
                                     alt="Front of men&#039;s Basic Tee in black."
                                     className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className="flex-1 font-mono">서울 강동</div>
                                <hr style={{borderTop: "1px solid #ddd"}} className="border-0 my-4 me-12"></hr>
                                <div className="text-sm font-sans mb-5">강동구 고덕로80길</div>
                                <img style={{height: "300px"}} src="./imgs/10.jpg"
                                     alt="Front of men&#039;s Basic Tee in black."
                                     className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className="flex-1 font-mono">서울 마포</div>
                                <hr style={{borderTop: "1px solid #ddd"}} className="border-0 my-4 me-12"></hr>
                                <div className="text-sm font-sans mb-5">마포구 마포대로 33</div>
                                <img style={{height: "300px"}} src="./imgs/11.jpg"
                                     alt="Front of men&#039;s Basic Tee in black."
                                     className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className="flex-1 font-mono">서울 명동</div>
                                <hr style={{borderTop: "1px solid #ddd"}} className="border-0 my-4 me-12"></hr>
                                <div className="text-sm font-sans mb-5">중구 명동길 42</div>
                                <img style={{height: "300px"}} src="./imgs/12.jpg"
                                     alt="Front of men&#039;s Basic Tee in black."
                                     className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col mt-20">
                        <div className="flex justify-center">
                            <span className="text-2xl text-gray-800">2</span>
                        </div>
                        <hr style={{borderTop: "1px solid #ddd"}} className="border-0 my-3"></hr>
                        <div className="flex justify-center">
                            <h1 className="text-lg">경기 지역</h1>
                        </div>

                        <div className="flex flex-col space-y-8 sm:flex-row sm:space-y-0 mt-20 gap-x-3">
                            <div className="flex flex-col flex-1">
                                <div className="flex-1 font-mono">경기 파주</div>
                                <hr style={{borderTop: "1px solid #ddd"}} className="border-0 my-4 me-12"></hr>
                                <div className="text-sm font-sans mb-5">파주읍 봉서산로 245</div>
                                <img style={{height: "300px"}} src="./imgs/13.jpg"
                                     alt="Front of men&#039;s Basic Tee in black."
                                     className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className="flex-1 font-mono">경기 일산</div>
                                <hr style={{borderTop: "1px solid #ddd"}} className="border-0 my-4 me-12"></hr>
                                <div className="text-sm font-sans mb-5">일산동구 정발산로 11</div>
                                <img style={{height: "300px"}} src="./imgs/14.jpg"
                                     alt="Front of men&#039;s Basic Tee in black."
                                     className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className="flex-1 font-mono">경기 김포</div>
                                <hr style={{borderTop: "1px solid #ddd"}} className="border-0 my-4 me-12"></hr>
                                <div className="text-sm font-sans mb-5">김포대로 926번길</div>
                                <img style={{height: "300px"}} src="./imgs/15.jpg"
                                     alt="Front of men&#039;s Basic Tee in black."
                                     className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className="flex-1 font-mono">경기 의정부</div>
                                <hr style={{borderTop: "1px solid #ddd"}} className="border-0 my-4 me-12"></hr>
                                <div className="text-sm font-sans mb-5">범골로 63번길</div>
                                <img style={{height: "300px"}} src="./imgs/16.jpg"
                                     alt="Front of men&#039;s Basic Tee in black."
                                     className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white px-6 py-24 sm:py-28 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">인터넷 상담</h2>
                            <p className="mt-2 text-lg leading-8 text-gray-600">고객님의 휴대폰 번호와 상담 내용을 남겨 주시면 견적과 솔루션을 도출한
                                뒤 전화 드립니다.</p>
                        </div>
                        <form action="#" method="POST" className="mx-auto mt-12 max-w-xl sm:mt-12">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label htmlFor="name"
                                           className="block text-sm font-semibold leading-6 text-gray-900">성함</label>
                                    <div className="mt-2.5">
                                        <input onChange={(e) => setName(e.target.value)} type="text" name="name"
                                               id="name"
                                               className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="region"
                                           className="block text-sm font-semibold leading-6 text-gray-900">지역</label>
                                    <div className="mt-2.5">
                                        <input onChange={(e) => setRegion(e.target.value)} type="text" name="region"
                                               id="region"
                                               className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="mt-2.5">
                                        <label htmlFor="phone"
                                               className="block text-sm font-semibold leading-6 text-gray-900">휴대폰
                                            번호</label>
                                        <input onChange={(e) => setPhone(e.target.value)} type="text" name="phone"
                                               id="phone"
                                               className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="content"
                                           className="block text-sm font-semibold leading-6 text-gray-900">상담 내용</label>
                                    <div className="mt-2.5">
                            <textarea onChange={(e) => setContent(e.target.value)} name="content" id="content" rows={4}
                                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <button type="button" onClick={dataInsert}
                                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    상담하기
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="flex flex-col justify-center mb-4">
                        <div className="flex justify-center mb-4">
                            <svg style={{width: "25px", height: "25px"}} xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                 className="w-6 h-6 fill-gray-900 stroke-2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"/>
                            </svg>
                            <span className="ml-2">
                    010-8681-6763
                (대표전화)
                </span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <span className="text-sm font-extralight">AM 06:00 - PM 23:00</span>
                            </div>
                            <p className="text-center text-sm font-extralight">
                                대표이사: 신지연 <br/>
                                오피스: 파주 심학산로 384 <br/>
                                전화번호: 010-4909-6763 | 이메일: hobath01022naver.com
                            </p>
                        </div>


                    </div>

                    <div className="flex justify-center gap-x-3">
                        <a target="_blank" href="https://open.kakao.com/o/slCYswKg">
                            <img style={{width: "65px", height: "65px"}} src="./imgs/kakao.png"
                                 alt="Front of men&#039;s Basic Tee in black."
                                 className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                        </a>
                        <a target="_blank" href="https://blog.naver.com/hobath0102">
                            <img style={{width: "65px", height: "65px"}} src="./imgs/naver3.png"
                                 alt="Front of men&#039;s Basic Tee in black."
                                 className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
