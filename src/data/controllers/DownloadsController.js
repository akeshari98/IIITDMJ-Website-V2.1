const Downloads = require('../modals/downloadsModal')
exports.getAllDownloads = async (req, res) => {
  try {
    const downloads = await Downloads.findAll();
    res.json(downloads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createDownload = async (req, res) => {
  try {
    const category = await Downloads.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteDownload = async (req, res) => {
  try {
    const deleted = await Downloads.destroy({
      where: { id: req.params.id }
    });
    res.json({ success: deleted > 0 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// exports.updateCalendar = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const calendar = await Calendar.findByPk(id);
    
//     if (!calendar) {
//       return res.status(404).json({ error: 'Calendar not found' });
//     }

//     await calendar.update(req.body);
//     res.json(calendar);
//   } catch (error) {
//     console.error('Error updating calendar:', error);
//     res.status(400).json({ error: error.message });
//   }
// };
exports.updateDownload = async (req,res) => {
  try {
    const {id} = req.params;
    const downloads = await Downloads.findByPk(id);
    if(!downloads){
      return res.status(404).json({error: 'download not found'});
    }
    await downloads.update(req.body);
    res.json(downloads);
  } catch(error){
      console.error('Error Updating Downloads:', error);
      res.status(400).json({error: error.message})
  }
  }
