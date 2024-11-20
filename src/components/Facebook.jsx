import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const Facebook = () => {
    const [socialPosts, setSocialPosts] = React.useState([
        { id: 'post1', type: 'facebook', url: 'https://fb.watch/vQGCkbbS_y/' },
        // { id: 'post2', type: 'facebook', url: 'https://fb.watch/vQGCkbbS_y/' },
        { id: 'post2', type: 'instagram', url: 'https://www.instagram.com/reel/DCUGr7JMud4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
      ]);
    
      const handleDragEnd = (result) => {
        // Lógica para manejar el cambio de orden de los posts
        const { source, destination } = result;
        if (destination) {
          const updatedPosts = Array.from(socialPosts);
          const [removed] = updatedPosts.splice(source.index, 1);
          updatedPosts.splice(destination.index, 0, removed);
          setSocialPosts(updatedPosts);
        }
      };
    
      return (
        <div class="ratio ratio-16x9">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="social-posts">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {socialPosts.map((post, index) => (
                  <Draggable key={post.id} draggableId={post.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {post.type === 'facebook' && (
                          <iframe
                            src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(post.url)}&show_text=true&width=500&height=300&appId`}
                           
                            style={{ border: 'none', overflow: 'hidden' }}
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          />
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        </div>
      );
}

export default Facebook