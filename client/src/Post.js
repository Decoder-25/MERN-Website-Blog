export default function Post(){
    return(
        <div className="post">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>My blog1</h2>
          <p className="info">
            <a className="author">Disha Biswas</a>
            <time>2023-06-21 15:20</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, hic
            quisquam. Ipsum quaerat sit deleniti natus fugiat, ex qui sequi est
            voluptatem a ipsam perspiciatis alias, cumque reprehenderit quod
            necessitatibus.
          </p>
        </div>
      </div>
    );
}
