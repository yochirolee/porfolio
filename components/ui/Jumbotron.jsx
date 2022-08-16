import Project from "../alerts/project";
import { projectList } from "../../assets/projectList";
import Image from "next/image";
export const Jumbotron = () => {
	return (
		<section className="p-6 md:p-12 text-center  shadow-lg rounded-md bg-img">
			<div className="flex justify-center">
				<div className="max-w-3xl">
					<div className="block p-6 rounded-lg shadow-lg bg-white m-4">
						<div className="md:flex md:flex-row">
							<div className="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
								<Image src="/perfil.jpg" className="rounded-full" alt="avatar" width={500} height={500} />
							</div>
							<div className="md:ml-6 mt-10 items-center align-center">
								<p className="font-semibold text-xl lg:text-3xl mb-2 text-gray-800">
									Yochiro Lee Cruz
								</p>
								<p className="font-semibold text-sm text-gray-500  pb-2 border-b">
									Front-End Developer
								</p>

								<div className="pt-4  font-semibold text-gray-500">
									<h6 className="p-4">Skills</h6>
									<div className="flex  justify-center flex-wrap gap-3 mb-4 ">
										<span className="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-50">
											HTML
										</span>
										<span className="px-2 py-1 flex items-center text-xs rounded-md text-blue-600 font-semibold bg-blue-200">
											CSS
										</span>
										<span className="px-2 py-1 flex items-center text-xs rounded-md text-yellow-600 font-semibold bg-yellow-200">
											JAVASCRIPT
										</span>
										<span className="px-2 py-1 flex items-center text-xs rounded-md text-blue-300 font-semibold bg-blue-500">
											REACT
										</span>
										<span className="px-2 py-1 flex items-center text-xs rounded-md text-violet-600 font-semibold bg-violet-200">
											TAILWINDS CSS
										</span>

										<span className="px-2 py-1 flex items-center text-xs rounded-md text-gray-300 font-semibold bg-gray-400">
											NODE JS
										</span>
										<span className="px-2 py-1 flex items-center text-xs rounded-md text-red-600 font-semibold bg-red-200">
											SQL
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className=" mt-6 ">
							<h6 className="p-4">Projects</h6>
							<div className="flex flex-col justify-around">
								{projectList.map((project) => (
									<Project key={project.id} project={project} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<button
				type="button"
				data-mdb-ripple="true"
				data-mdb-ripple-color="light"
				className="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
				style={{ backgroundColor: "#333" }}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-4 h-4">
					<path
						fill="currentColor"
						d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
					/>
				</svg>
			</button>
		</section>
	);
};
