import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const Instagram = () => {
    const [socialPosts, setSocialPosts] = React.useState([
        { id: 'post1', type: 'facebook', url: 'https://fb.watch/vQGCkbbS_y/' },
        { id: 'post2', type: 'facebook', url: 'https://fb.watch/vQGCkbbS_y/' },
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
                        {post.type === 'instagram' && (
                          <iframe
                            src={`https://www.instagram.com/p/${post.url.split('/')[post.url.split('/').length - 2]}/embed`}
                            width="400"
                            height="480"
                            frameBorder="0"
                            scrolling="no"
                            allowTransparency={true}
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
      );
}

export default Instagram