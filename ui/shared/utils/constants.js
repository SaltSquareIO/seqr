import { Form } from 'semantic-ui-react'

import BaseFieldView from '../components/panel/view-fields/BaseFieldView'
import OptionFieldView from '../components/panel/view-fields/OptionFieldView'
import { BooleanCheckbox, RadioGroup, Dropdown, InlineToggle } from '../components/form/Inputs'


// SAMPLES

export const DATASET_TYPE_READ_ALIGNMENTS = 'ALIGN'
export const DATASET_TYPE_VARIANT_CALLS = 'VARIANTS'

export const SAMPLE_STATUS_LOADED = 'loaded'

export const SAMPLE_TYPE_EXOME = 'WES'
export const SAMPLE_TYPE_GENOME = 'WGS'
export const SAMPLE_TYPE_RNA = 'RNA'

export const SAMPLE_TYPE_OPTIONS = [
  { value: SAMPLE_TYPE_EXOME, text: 'Exome' },
  { value: SAMPLE_TYPE_GENOME, text: 'Genome' },
  { value: SAMPLE_TYPE_RNA, text: 'RNA-seq' },
]

export const SAMPLE_TYPE_LOOKUP = SAMPLE_TYPE_OPTIONS.reduce(
  (acc, opt) => ({
    ...acc,
    ...{ [opt.value]: opt },
  }), {},
)

// ANALYSIS STATUS

export const FAMILY_STATUS_SOLVED = 'S'
export const FAMILY_STATUS_SOLVED_KNOWN_GENE_KNOWN_PHENOTYPE = 'S_kgfp'
export const FAMILY_STATUS_SOLVED_KNOWN_GENE_DIFFERENT_PHENOTYPE = 'S_kgdp'
export const FAMILY_STATUS_SOLVED_NOVEL_GENE = 'S_ng'
export const FAMILY_STATUS_STRONG_CANDIDATE_KNOWN_GENE_KNOWN_PHENOTYPE = 'Sc_kgfp'
export const FAMILY_STATUS_STRONG_CANDIDATE_KNOWN_GENE_DIFFERENT_PHENOTYPE = 'Sc_kgdp'
export const FAMILY_STATUS_STRONG_CANDIDATE_NOVEL_GENE = 'Sc_ng'
export const FAMILY_STATUS_REVIEWED_PURSUING_CANDIDATES = 'Rcpc'
export const FAMILY_STATUS_REVIEWED_NO_CLEAR_CANDIDATE = 'Rncc'
export const FAMILY_STATUS_ANALYSIS_IN_PROGRESS = 'I'
export const FAMILY_STATUS_WAITING_FOR_DATA = 'Q'

export const FAMILY_ANALYSIS_STATUS_OPTIONS = [
  { value: FAMILY_STATUS_SOLVED, color: '#4CAF50', name: 'Solved' },
  { value: FAMILY_STATUS_SOLVED_KNOWN_GENE_KNOWN_PHENOTYPE, color: '#4CAF50', name: 'Solved - known gene for phenotype' },
  { value: FAMILY_STATUS_SOLVED_KNOWN_GENE_DIFFERENT_PHENOTYPE, color: '#4CAF50', name: 'Solved - gene linked to different phenotype' },
  { value: FAMILY_STATUS_SOLVED_NOVEL_GENE, color: '#4CAF50', name: 'Solved - novel gene' },
  { value: FAMILY_STATUS_STRONG_CANDIDATE_KNOWN_GENE_KNOWN_PHENOTYPE, color: '#CDDC39', name: 'Strong candidate - known gene for phenotype' },
  { value: FAMILY_STATUS_STRONG_CANDIDATE_KNOWN_GENE_DIFFERENT_PHENOTYPE, color: '#CDDC39', name: 'Strong candidate - gene linked to different phenotype' },
  { value: FAMILY_STATUS_STRONG_CANDIDATE_NOVEL_GENE, color: '#CDDC39', name: 'Strong candidate - novel gene' },
  { value: FAMILY_STATUS_REVIEWED_PURSUING_CANDIDATES, color: '#CDDC39', name: 'Reviewed, currently pursuing candidates' },
  { value: FAMILY_STATUS_REVIEWED_NO_CLEAR_CANDIDATE, color: '#EF5350', name: 'Reviewed, no clear candidate' },
  { value: FAMILY_STATUS_ANALYSIS_IN_PROGRESS, color: '#4682B4', name: 'Analysis in Progress' },
  { value: FAMILY_STATUS_WAITING_FOR_DATA, color: '#FFC107', name: 'Waiting for data' },
]

// FAMILY FIELDS

export const FAMILY_DISPLAY_NAME = 'displayName'
export const FAMILY_FIELD_DESCRIPTION = 'description'
export const FAMILY_FIELD_ANALYSIS_STATUS = 'analysisStatus'
export const FAMILY_FIELD_ANALYSED_BY = 'analysedBy'
export const FAMILY_FIELD_ANALYSIS_NOTES = 'analysisNotes'
export const FAMILY_FIELD_ANALYSIS_SUMMARY = 'analysisSummary'
export const FAMILY_FIELD_INTERNAL_NOTES = 'internalCaseReviewNotes'
export const FAMILY_FIELD_INTERNAL_SUMMARY = 'internalCaseReviewSummary'
export const FAMILY_FIELD_FIRST_SAMPLE = 'firstSample'
export const FAMILY_FIELD_CODED_PHENOTYPE = 'codedPhenotype'
export const FAMILY_FIELD_OMIM_NUMBER = 'postDiscoveryOmimNumber'
export const FAMILY_FIELD_PEDIGREE = 'pedigreeImage'

export const FAMILY_FIELD_RENDER_LOOKUP = {
  [FAMILY_FIELD_DESCRIPTION]: { name: 'Family Description' },
  [FAMILY_FIELD_ANALYSIS_STATUS]: { name: 'Analysis Status', component: OptionFieldView },
  [FAMILY_FIELD_ANALYSED_BY]: {
    name: 'Analysed By',
    component: BaseFieldView,
    submitArgs: { familyField: 'analysed_by' },
  },
  [FAMILY_FIELD_FIRST_SAMPLE]: { name: 'Data Loaded?', component: BaseFieldView },
  [FAMILY_FIELD_ANALYSIS_NOTES]: { name: 'Notes' },
  [FAMILY_FIELD_ANALYSIS_SUMMARY]: { name: 'Analysis Summary' },
  [FAMILY_FIELD_CODED_PHENOTYPE]: { name: 'Coded Phenotype' },
  [FAMILY_FIELD_OMIM_NUMBER]: { name: 'Post-discovery OMIM #', component: BaseFieldView },
  [FAMILY_FIELD_INTERNAL_NOTES]: { name: 'Internal Notes', internal: true },
  [FAMILY_FIELD_INTERNAL_SUMMARY]: { name: 'Internal Summary', internal: true },
}

export const FAMILY_DETAIL_FIELDS = [
  { id: FAMILY_FIELD_DESCRIPTION, canEdit: true },
  { id: FAMILY_FIELD_ANALYSIS_STATUS, canEdit: true },
  { id: FAMILY_FIELD_ANALYSED_BY, canEdit: true },
  { id: FAMILY_FIELD_ANALYSIS_NOTES, canEdit: true },
  { id: FAMILY_FIELD_ANALYSIS_SUMMARY, canEdit: true },
  { id: FAMILY_FIELD_CODED_PHENOTYPE, canEdit: true },
  { id: FAMILY_FIELD_OMIM_NUMBER, canEdit: true },
]

// INDIVIDUAL FIELDS

export const SEX_OPTIONS = [
  { value: 'M', label: 'Male' },
  { value: 'F', label: 'Female' },
  { value: 'U', label: '?' },
]

export const SEX_LOOKUP = SEX_OPTIONS.reduce(
  (acc, opt) => ({
    ...acc,
    ...{ [opt.value]: opt.label === '?' ? 'Unknown' : opt.label },
  }), {},
)

export const AFFECTED = 'A'
export const UNAFFECTED = 'N'
export const UNKNOWN_AFFECTED = 'U'
export const AFFECTED_OPTIONS = [
  { value: AFFECTED, label: 'Affected' },
  { value: UNAFFECTED, label: 'Unaffected' },
  { value: UNKNOWN_AFFECTED, label: '?' },
]

export const AFFECTED_LOOKUP = AFFECTED_OPTIONS.reduce(
  (acc, opt) => ({
    ...acc,
    ...{ [opt.value]: opt.label === '?' ? 'Unknown' : opt.label },
  }), {},
)


// CLINVAR

export const CLINSIG_SEVERITY = {
  // clinvar
  pathogenic: 1,
  'risk factor': 0,
  risk_factor: 0,
  'likely pathogenic': 1,
  'pathogenic/likely_pathogenic': 1,
  likely_pathogenic: 1,
  benign: -1,
  'likely benign': -1,
  'benign/likely_benign': -1,
  likely_benign: -1,
  protective: -1,
  // hgmd
  DM: 1,
  'DM?': 0,
  FPV: 0,
  FP: 0,
  DFP: 0,
  DP: 0,
}


// LOCUS LISTS

export const LOCUS_LIST_IS_PUBLIC_FIELD_NAME = 'isPublic'
export const LOCUS_LIST_LAST_MODIFIED_FIELD_NAME = 'lastModifiedDate'
export const LOCUS_LIST_CURATOR_FIELD_NAME = 'createdBy'

export const GENOME_VERSION_37 = '37'
export const GENOME_VERSION_OPTIONS = [
  { value: GENOME_VERSION_37, text: 'GRCh37' },
  { value: '38', text: 'GRCh38' },
]

export const LOCUS_LIST_FIELDS = [
  {
    name: 'name',
    label: 'List Name',
    labelHelp: 'A descriptive name for this gene list',
    validate: value => (value ? undefined : 'Name is required'),
    width: 3,
    isEditable: true,
  },
  { name: 'numEntries', label: 'Entries', width: 1 },
  {
    name: 'description',
    label: 'Description',
    labelHelp: 'Some background on how this list is curated',
    width: 9,
    isEditable: true,
  },
  {
    name: LOCUS_LIST_LAST_MODIFIED_FIELD_NAME,
    label: 'Last Updated',
    width: 3,
    fieldDisplay: lastModifiedDate => new Date(lastModifiedDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' }),
  },
  { name: LOCUS_LIST_CURATOR_FIELD_NAME, label: 'Curator', width: 3 },
  {
    name: LOCUS_LIST_IS_PUBLIC_FIELD_NAME,
    label: 'Public List',
    labelHelp: 'Should other seqr users be able to use this gene list?',
    component: RadioGroup,
    options: [{ value: true, text: 'Yes' }, { value: false, text: 'No' }],
    fieldDisplay: isPublic => (isPublic ? 'Yes' : 'No'),
    width: 2,
    isEditable: true,
  },
]

const parseInterval = (intervalString) => {
  const match = intervalString.match(/([^\s-]*):(\d*)-(\d*)/)
  return match ? { chrom: match[1], start: match[2], end: match[3] } : null
}

export const LOCUS_LIST_ITEMS_FIELD = {
  name: 'parsedItems',
  label: 'Genes/ Intervals',
  labelHelp: 'A list of genes and intervals. Can be separated by commas or whitespace. Intervals should be in the form <chrom>:<start>-<end>',
  fieldDisplay: () => null,
  isEditable: true,
  component: Form.TextArea,
  rows: 12,
  validate: value => (((value || {}).items || []).length ? undefined : 'Genes and/or intervals are required'),
  format: value => (value || {}).display,
  normalize: (value, previousValue) => ((value && value.items) ? value : {
    ...(previousValue || {}),
    display: value,
    items: value.split(/[\s|,]/).filter(itemName => itemName.trim()).map(itemName =>
      ((previousValue || {}).itemMap || {})[itemName.trim()] || parseInterval(itemName) ||
      (itemName.trim().toUpperCase().startsWith('ENSG') ? { geneId: itemName.trim().toUpperCase() } : { symbol: itemName.trim() }),
    ),
    itemMap: (previousValue || {}).itemMap || {},
  }),
  additionalFormFields: [
    {
      name: 'intervalGenomeVersion',
      component: RadioGroup,
      options: GENOME_VERSION_OPTIONS,
      label: 'Genome Version',
      labelHelp: 'The genome version associated with intervals. Only required if the list contains intervals',
      validate: (value, allValues) => (
        (value || ((allValues.parsedItems || {}).items || []).every(item => item.symbol || item.geneId)) ? undefined :
          'Genome version is required for lists with intervals'
      ),
    },
    {
      name: 'ignoreInvalidItems',
      component: BooleanCheckbox,
      label: 'Ignore invalid genes and intervals',
    },
  ],
}

export const VEP_GROUP_NONSENSE = 'nonsense'
export const VEP_GROUP_ESSENTIAL_SPLICE_SITE = 'essential_splice_site'
export const VEP_GROUP_EXTENDED_SPLICE_SITE = 'extended_splice_site'
export const VEP_GROUP_MISSENSE = 'missense'
export const VEP_GROUP_FRAMESHIFT = 'frameshift'
export const VEP_GROUP_INFRAME = 'inframe'
export const VEP_GROUP_SYNONYMOUS = 'synonymous'
export const VEP_GROUP_OTHER = 'other'


const ORDERED_VEP_CONSEQUENCES = [
  {
    description: 'A feature ablation whereby the deleted region includes a transcript feature',
    text: 'Transcript ablation',
    value: 'transcript_ablation',
    so: 'SO:0001893',
  },
  {
    description: "A splice variant that changes the 2 base region at the 5' end of an intron",
    text: 'Splice donor variant',
    value: 'splice_donor_variant',
    group: VEP_GROUP_ESSENTIAL_SPLICE_SITE,
    so: 'SO:0001575',
  },
  {
    description: "A splice variant that changes the 2 base region at the 3' end of an intron",
    text: 'Splice acceptor variant',
    value: 'splice_acceptor_variant',
    group: VEP_GROUP_ESSENTIAL_SPLICE_SITE,
    so: 'SO:0001574',
  },
  {
    description: 'A sequence variant whereby at least one base of a codon is changed, resulting in a premature stop codon, leading to a shortened transcript',
    text: 'Stop gained',
    value: 'stop_gained',
    group: VEP_GROUP_NONSENSE,
    so: 'SO:0001587',
  },
  {
    description: 'A sequence variant which causes a disruption of the translational reading frame, because the number of nucleotides inserted or deleted is not a multiple of three',
    text: 'Frameshift',
    value: 'frameshift_variant',
    group: VEP_GROUP_FRAMESHIFT,
    so: 'SO:0001589',
  },
  {
    description: 'A sequence variant where at least one base of the terminator codon (stop) is changed, resulting in an elongated transcript',
    text: 'Stop lost',
    value: 'stop_lost',
    group: VEP_GROUP_MISSENSE,
    so: 'SO:0001578',
  },
  {
    description: 'A codon variant that changes at least one base of the first codon of a transcript',
    text: 'Initiator codon',
    value: 'initiator_codon_variant',
    group: VEP_GROUP_MISSENSE,
    so: 'SO:0001582',
  },
  {
    description: 'A codon variant that changes at least one base of the canonical start codon.',
    text: 'Start lost',
    value: 'start_lost',
    group: VEP_GROUP_MISSENSE,
    so: 'SO:0002012',
  },
  {
    description: 'An inframe non synonymous variant that inserts bases into in the coding sequence',
    text: 'In frame insertion',
    value: 'inframe_insertion',
    group: VEP_GROUP_INFRAME,
    so: 'SO:0001821',
  },
  {
    description: 'An inframe non synonymous variant that deletes bases from the coding sequence',
    text: 'In frame deletion',
    value: 'inframe_deletion',
    group: VEP_GROUP_INFRAME,
    so: 'SO:0001822',
  },
  {
    description: 'A feature amplification of a region containing a transcript',
    text: 'Transcript amplification',
    value: 'transcript_amplification',
    so: 'SO:0001889',
  },
  {
    description: 'A sequence_variant which is predicted to change the protein encoded in the coding sequence',
    text: 'Protein Altering',
    value: 'protein_altering_variant',
    group: VEP_GROUP_MISSENSE,
    so: 'SO:0001818',
  },
  {
    description: 'A sequence variant, where the change may be longer than 3 bases, and at least one base of a codon is changed resulting in a codon that encodes for a different amino acid',
    text: 'Missense',
    value: 'missense_variant',
    group: VEP_GROUP_MISSENSE,
    so: 'SO:0001583',
  },
  {
    description: 'A sequence variant in which a change has occurred within the region of the splice site, either within 1-3 bases of the exon or 3-8 bases of the intron',
    text: 'Splice region',
    value: 'splice_region_variant',
    group: VEP_GROUP_EXTENDED_SPLICE_SITE,
    so: 'SO:0001630',
  },
  {
    description: 'A sequence variant where at least one base of the final codon of an incompletely annotated transcript is changed',
    text: 'Incomplete terminal codon variant',
    value: 'incomplete_terminal_codon_variant',
    so: 'SO:0001626',
  },
  {
    description: 'A sequence variant where there is no resulting change to the encoded amino acid',
    text: 'Synonymous',
    value: 'synonymous_variant',
    group: VEP_GROUP_SYNONYMOUS,
    so: 'SO:0001819',
  },
  {
    description: 'A sequence variant where at least one base in the terminator codon is changed, but the terminator remains',
    text: 'Stop retained',
    value: 'stop_retained_variant',
    group: VEP_GROUP_SYNONYMOUS,
    so: 'SO:0001567',
  },
  {
    description: 'A sequence variant that changes the coding sequence',
    text: 'Coding sequence variant',
    value: 'coding_sequence_variant',
    so: 'SO:0001580',
  },
  {
    description: 'A transcript variant located with the sequence of the mature miRNA',
    text: 'Mature miRNA variant',
    value: 'mature_miRNA_variant',
    so: 'SO:0001620',
  },
  {
    description: "A UTR variant of the 5' UTR",
    text: '5 prime UTR variant',
    value: '5_prime_UTR_variant',
    so: 'SO:0001623',
  },
  {
    description: "A UTR variant of the 3' UTR",
    text: '3 prime UTR variant',
    value: '3_prime_UTR_variant',
    so: 'SO:0001624',
  },
  {
    description: 'A transcript variant occurring within an intron',
    text: 'Intron variant',
    value: 'intron_variant',
    so: 'SO:0001627',
  },
  {
    description: 'A variant in a transcript that is the target of NMD',
    text: 'NMD transcript variant',
    value: 'NMD_transcript_variant',
    so: 'SO:0001621',
  },
  //2 kinds of 'non_coding_transcript_exon_variant' text due to value change in Ensembl v77
  {
    description: 'A sequence variant that changes non-coding exon sequence',
    text: 'Non-coding exon variant',
    value: 'non_coding_exon_variant',
    so: 'SO:0001792',
  },
  {
    description: 'A sequence variant that changes non-coding exon sequence',
    text: 'Non-coding transcript exon variant',
    value: 'non_coding_transcript_exon_variant',
    so: 'SO:0001792',
  },
  // 2 kinds of 'nc_transcript_variant' text due to value change in Ensembl v77
  {
    description: 'A transcript variant of a non coding RNA',
    text: 'nc transcript variant',
    value: 'nc_transcript_variant',
    so: 'SO:0001619',
  },
  {
    description: 'A transcript variant of a non coding RNA',
    text: 'Non-coding transcript variant',
    value: 'non_coding_transcript_variant',
    so: 'SO:0001619',
  },
  {
    description: "A sequence variant located 5' of a gene",
    text: 'Upstream gene variant',
    value: 'upstream_gene_variant',
    so: 'SO:0001631',
  },
  {
    description: "A sequence variant located 3' of a gene",
    text: 'Downstream gene variant',
    value: 'downstream_gene_variant',
    so: 'SO:0001632',
  },
  {
    description: 'A feature ablation whereby the deleted region includes a transcription factor binding site',
    text: 'TFBS ablation',
    value: 'TFBS_ablation',
    so: 'SO:0001895',
  },
  {
    description: 'A feature amplification of a region containing a transcription factor binding site',
    text: 'TFBS amplification',
    value: 'TFBS_amplification',
    so: 'SO:0001892',
  },
  {
    description: 'In regulatory region annotated by Ensembl',
    text: 'TF binding site variant',
    value: 'TF_binding_site_variant',
    so: 'SO:0001782',
  },
  {
    description: 'A sequence variant located within a regulatory region',
    text: 'Regulatory region variant',
    value: 'regulatory_region_variant',
    so: 'SO:0001566',
  },
  {
    description: 'A feature ablation whereby the deleted region includes a regulatory region',
    text: 'Regulatory region ablation',
    value: 'regulatory_region_ablation',
    so: 'SO:0001894',
  },
  {
    description: 'A feature amplification of a region containing a regulatory region',
    text: 'Regulatory region amplification',
    value: 'regulatory_region_amplification',
    so: 'SO:0001891',
  },
  {
    description: 'A sequence variant that causes the extension of a genomic feature, with regard to the reference sequence',
    text: 'Feature elongation',
    value: 'feature_elongation',
    so: 'SO:0001907',
  },
  {
    description: 'A sequence variant that causes the reduction of a genomic feature, with regard to the reference sequence',
    text: 'Feature truncation',
    value: 'feature_truncation',
    so: 'SO:0001906',
  },
  {
    description: 'A sequence variant located in the intergenic region, between genes',
    text: 'Intergenic variant',
    value: 'intergenic_variant',
    so: 'SO:0001628',
  },
]

export const GROUPED_VEP_CONSEQUENCES = ORDERED_VEP_CONSEQUENCES.reduce((acc, consequence) => {
  const group = consequence.group || VEP_GROUP_OTHER
  acc[group] = [...(acc[group] || []), consequence]
  return acc
}, {})

export const VEP_CONSEQUENCE_ORDER_LOOKUP = ORDERED_VEP_CONSEQUENCES.reduce((acc, consequence, i) =>
  ({ ...acc, [consequence.value]: i }),
{})

export const EXCLUDED_TAG_NAME = 'Excluded'
export const REVIEW_TAG_NAME = 'Review'
export const DISCOVERY_TAG_CATEGORY = 'CMG Discovery Tags'


export const SORT_BY_FAMILY_GUID = 'FAMILY_GUID'
export const SORT_BY_XPOS = 'XPOS'
export const SORT_BY_PATHOGENICITY = 'PATHOGENICITY'
export const SORT_BY_IN_OMIM = 'IN_OMIM'
export const SORT_BY_PROTEIN_CONSQ = 'PROTEIN_CONSEQUENCE'
export const SORT_BY_EXAC = 'EXAC'
export const SORT_BY_1KG = '1KG'
export const SORT_BY_IN_GENE_LIST = 'IN_GENE_LIST'
export const SORT_BY_TAGS = 'TAGS'
export const SORT_BY_CONSTRAINT = 'CONSTRAINT'


const clinsigSeverity = (variant) => {
  const clinvarSignificance = variant.clinvar.clinsig && variant.clinvar.clinsig.split('/')[0]
  const hgmdSignificance = variant.hgmd.class
  if (!clinvarSignificance && !hgmdSignificance) return -10
  let clinvarSeverity = 0.1
  if (clinvarSignificance) {
    clinvarSeverity = clinvarSignificance in CLINSIG_SEVERITY ? CLINSIG_SEVERITY[clinvarSignificance] + 1 : 0.5
  }
  const hgmdSeverity = hgmdSignificance in CLINSIG_SEVERITY ? CLINSIG_SEVERITY[hgmdSignificance] + 0.5 : 0
  return clinvarSeverity + hgmdSeverity
}


export const VARIANT_SORT_OPTONS = [
  { value: SORT_BY_FAMILY_GUID, text: 'Family', comparator: (a, b) => a.familyGuid.localeCompare(b.familyGuid) },
  { value: SORT_BY_XPOS, text: 'Position', comparator: (a, b) => a.xpos - b.xpos },
  {
    value: SORT_BY_PROTEIN_CONSQ,
    text: 'Protein Consequence',
    comparator: (a, b) =>
      VEP_CONSEQUENCE_ORDER_LOOKUP[b.annotation.vepConsequence] - VEP_CONSEQUENCE_ORDER_LOOKUP[a.annotation.vepConsequence],
  },
  { value: SORT_BY_EXAC, text: 'ExAC Frequency', comparator: (a, b) => a.annotation.freqs.exac - b.annotation.freqs.exac },
  { value: SORT_BY_1KG, text: '1kg  Frequency', comparator: (a, b) => a.annotation.freqs.g1k - b.annotation.freqs.g1k },
  { value: SORT_BY_PATHOGENICITY, text: 'Pathogenicity', comparator: (a, b) => clinsigSeverity(b) - clinsigSeverity(a) },
  {
    value: SORT_BY_CONSTRAINT,
    text: 'Constraint',
    comparator: (a, b, genesById) =>
      Math.min(...a.geneIds.reduce((acc, geneId) =>
        [...acc, ...Object.values(genesById[geneId].constraints).map(constraint => constraint.rank).filter(rank => rank)],
      [])) -
      Math.min(...b.geneIds.reduce((acc, geneId) =>
        [...acc, ...Object.values(genesById[geneId].constraints).map(constraint => constraint.rank).filter(rank => rank)],
      [])),
  },
  {
    value: SORT_BY_IN_OMIM,
    text: 'In OMIM',
    comparator: (a, b, genesById) =>
      b.geneIds.some(geneId => genesById[geneId].phenotypeInfo.mimPhenotypes.length > 0) - a.geneIds.some(geneId => genesById[geneId].phenotypeInfo.mimPhenotypes.length > 0),
  },
  {
    value: SORT_BY_IN_GENE_LIST,
    text: 'In Gene List',
    comparator: (a, b, genesById) =>
      b.geneIds.reduce((acc, geneId) => acc + genesById[geneId].locusLists.length, b.locusLists.length) -
      a.geneIds.reduce((acc, geneId) => acc + genesById[geneId].locusLists.length, a.locusLists.length),
  },
  {
    value: SORT_BY_TAGS,
    text: 'Tags & Notes',
    comparator: (a, b) =>
      b.tags.reduce((acc, tag) => (tag.category === DISCOVERY_TAG_CATEGORY ? acc + 3 : acc + 2), b.notes.length) -
      a.tags.reduce((acc, tag) => (tag.category === DISCOVERY_TAG_CATEGORY ? acc + 3 : acc + 2), a.notes.length),
  },

]

export const VARIANT_SORT_LOOKUP = VARIANT_SORT_OPTONS.reduce(
  (acc, opt) => ({
    ...acc,
    [opt.value]: opt.comparator,
  }), {},
)

export const VARIANT_SORT_FIELD = {
  name: 'sortOrder',
  component: Dropdown,
  inline: true,
  selection: false,
  fluid: false,
  label: 'Sort By:',
  options: VARIANT_SORT_OPTONS,
}
export const VARIANT_HIDE_EXCLUDED_FIELD = {
  name: 'hideExcluded',
  component: InlineToggle,
  label: 'Hide Excluded',
  labelHelp: 'Remove all variants tagged with the "Excluded" tag from the results',
}
export const VARIANT_HIDE_REVIEW_FIELD = {
  name: 'hideReviewOnly',
  component: InlineToggle,
  label: 'Hide Review Only',
  labelHelp: 'Remove all variants tagged with only the "Review" tag from the results',
}
export const VARIANT_PER_PAGE_FIELD = {
  name: 'recordsPerPage',
  component: Dropdown,
  inline: true,
  selection: false,
  fluid: false,
  label: 'Variants Per Page:',
  options: [{ value: 10 }, { value: 25 }, { value: 50 }, { value: 100 }],
}


export const VARIANT_EXPORT_DATA = [
  { header: 'chrom' },
  { header: 'pos' },
  { header: 'ref' },
  { header: 'alt' },
  { header: 'gene', getVal: variant => variant.annotation.mainTranscript.symbol },
  { header: 'family', getVal: variant => variant.familyGuid.split(/_(.+)/)[1] },
  { header: 'tags', getVal: variant => variant.tags.map(tag => tag.name).join('|') },
  { header: 'notes', getVal: variant => variant.notes.map(note => `${note.createdBy}: ${note.note}`).join('|') },
  { header: 'worst_consequence', getVal: variant => variant.annotation.vepConsequence },
  { header: '1kg_freq', getVal: variant => variant.annotation.freqs.g1k },
  { header: 'exac_freq', getVal: variant => variant.annotation.freqs.exac },
  { header: 'gnomad_genomes_freq', getVal: variant => variant.annotation.freqs.gnomad_genomes },
  { header: 'gnomad_exomes_freq', getVal: variant => variant.annotation.freqs.gnomad_exomes_freq },
  { header: 'topmed_freq', getVal: variant => variant.annotation.freqs.topmedAF },
  { header: 'sift', getVal: variant => variant.annotation.sift },
  { header: 'polyphen', getVal: variant => variant.annotation.polyphen },
  { header: 'muttaster', getVal: variant => variant.annotation.mut_taster },
  { header: 'fathmm', getVal: variant => variant.annotation.fathmm },
  { header: 'hgvsc', getVal: variant => variant.annotation.mainTranscript.hgvsc },
  { header: 'hgvsp', getVal: variant => variant.annotation.mainTranscript.hgvsp },
]

export const VARIANT_GENOTYPE_EXPORT_DATA = [
  { header: 'sample_id', getVal: (genotype, individualId) => individualId },
  { header: 'genotype', getVal: genotype => (genotype.alleles.length ? genotype.alleles.join('/') : './.') },
  { header: 'filter' },
  { header: 'ad' },
  { header: 'dp' },
  { header: 'gq' },
  { header: 'ab' },
]

export const getVariantsExportData = (variants) => {
  const maxGenotypes = Math.max(...variants.map(variant => Object.keys(variant.genotypes).length), 0)
  return {
    rawData: variants,
    headers: [...Array(maxGenotypes).keys()].reduce(
      (acc, i) => [...acc, ...VARIANT_GENOTYPE_EXPORT_DATA.map(config => `${config.header}_${i + 1}`)],
      VARIANT_EXPORT_DATA.map(config => config.header),
    ),
    processRow: variant => Object.keys(variant.genotypes).reduce(
      (acc, individualId) => [...acc, ...VARIANT_GENOTYPE_EXPORT_DATA.map((config) => {
        const genotype = variant.genotypes[individualId]
        return config.getVal ? config.getVal(genotype, individualId) : genotype[config.header]
      })],
      VARIANT_EXPORT_DATA.map(config => (config.getVal ? config.getVal(variant) : variant[config.header])),
    ),
  }
}
