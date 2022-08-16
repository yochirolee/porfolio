export default function Project({ project }) {
	const { title, tecnologies, live_url, github_url } = project;

	return (
		<div className="  p-4 w-full md:w-1/2 mx-auto bg-white rounded-xl shadow-lg flex justify-between space-x-12 items-center  my-2 ">
		
			<div className="flex flex-col ">
				<a href={live_url} className="text-slate-500">
					{title}
				</a>
				<small className="text-blue-400">{tecnologies}</small>
			</div>
			<div className=" flex  gap-2 text-3xl">
				<a href={live_url}>
					<i className="las la-play text-green-500 cursor-pointer" aria-hidden="true"></i>
				</a>
				<a href={github_url}>
					<i className="lab la-github cursor-pointer" aria-hidden="true"></i>
				</a>
			</div>
		</div>
	);
}
