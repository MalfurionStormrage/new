const modellerTasks =  require('../modellers/modeller.tasks');
const { errorHandler } = require('../helpers/errorHandler');

//request to get ( * )
exports.list = async (req , res) => {

	try {
		const respuesta = await modellerTasks.find({});
		res.status(200).json({ respuesta });
	} catch(error) {
		res.status(400).json({
			message:`error en la consulta ${errorHandler(error)}`
		})		
	}

}

//request to filter
exports.filt = async (req , res ) => {

	try {
		const respuesta = await modellerTasks.findById(req.params.id);
		res.status(200).json({ respuesta });
	} catch(error) {
		res.status(400).json({
			message: `Error en la consulta , ${errorHandler(error)}`
		})
	}

}

//request to post
exports.create = async (req , res) => {

	const addModellerTasks = new modellerTasks(req.body)
	try {
		const respuesta = await addModellerTasks.save();
		res.status(200).json({ 
			message: 'solicitud realizada ' ,
			respuesta 
		});
	} catch (error) {
		res.status(400).json({
			message:`error en la consulta ${errorHandler(error)}`
		})
	}

}

//request to delete
exports.update = async (req , res) => {

	try {
		const respuesta = await modellerTasks.findByIdAndUpdate(req.params.id , req.body , {new:true});
		res.status(200).json({
			message:`solicitud realizada`,
			respuesta
		})
	} catch (error) {
		res.status(400).json({
			message:`error en la consulta ${errorHandler(error)}`
		})
	}
	
}

//request to delete
exports.remove = async (req , res) => {

	try {
		const respuesta = await modellerTasks.findByIdAndDelete(req.params.id);
		res.status(200).json({ message:`solicitud realizada` })
	} catch (error) {
		res.status(400).json({
			message:`error en la consulta ${errorHandler(error)}`
		})
	}
	
}