export default function BlogDemo() {
  return (
    <>
  

      <header className="text-center pt-16 md:pt-32">
      
        <h1 className="font-bold break-normal text-3xl md:text-5xl">
          Welcome to Ghostwind CSS lorem100
        </h1>
  <p className="text-m text-green-500 mt-4 font-bold">
          04 AUGUST 2023 <span className="text-gray-900"> | </span> x min read <span className="text-gray-900"> | </span> Written By - Author Name 
        </p>
        
      </header>

    

      {/* Reading area */}
      <main className="container max-w-5xl mx-auto mt-3">
           {/* Author footer */}
          
        
        <article
          className="bg-white p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
          style={{ fontFamily: "Georgia,serif" }}
        >
          {/* copy–paste your paragraphs / code / blockquote here */}
          <p className="text-2xl md:text-3xl mb-5">
            Welcome fellow  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, quisquam ex aut earum in delectus doloremque nam harum amet natus qui cumque nemo reiciendis quas! Natus, aperiam. Facilis sit alias et non eos rerum velit, itaque illum. Enim architecto ipsa iste sapiente hic, odit, quae repellendus, recusandae repellat ipsum sit quasi blanditiis excepturi et praesentium eius impedit ullam nemo est debitis numquam. Odio eveniet tempore aliquam omnis incidunt consequuntur nostrum necessitatibus non dolorem, ipsum, voluptate ipsam molestias adipisci. Doloremque assumenda iure, qui cupiditate harum vel tempora laboriosam laborum itaque? Sed dignissimos ducimus obcaecati cupiditate tempore quaerat iste sint deleniti odio!
            <a className="text-gray-800 border-b-2 border-green-500" href="#">
              Tailwind CSS
            </a>{" "}
            fan…
          </p>

          {/* …rest of static HTML… */}
        </article>

     
      </main>
    </>
  );
}
