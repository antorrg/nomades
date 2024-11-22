import {Media } from'../db.js'; // Importa tu modelo

const measurePerformance = async (id) => {
    try {
        console.time('Query Time'); // Inicia el temporizador
        const record = await Media.findByPk(id, { 
            //raw: true 
        });
        console.timeEnd('Query Time'); // Termina el temporizador
      
        if (!record) {
          console.log('Registro no encontrado');
          return;
        }
      
        // Calcula el tamaño en bytes
        const recordSize = Buffer.byteLength(JSON.stringify(record), 'utf8');
        console.log(`Tamaño del registro en bytes: ${recordSize}`);
    } catch (error) {
        throw error
    }

};

//measurePerformance(1).catch(console.error);
export default measurePerformance
